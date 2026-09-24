import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { EditProfileModal } from "@/app/(app)/dashboard/components/EditProfileModal";

import { createClient } from "@/utils/supabase/client";
import { updateProfile } from "@/utils/profile/updateProfile";
import {
  changePassword,
} from "@/utils/profile/changePassword";

const refreshMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: refreshMock,
  }),
}));

jest.mock("@/utils/supabase/client");
jest.mock("@/utils/profile/updateProfile");
jest.mock("@/utils/profile/changePassword");

describe("EditProfileModal submit", () => {
  const mockProfile = {
    id: "123",
    username: "testuser",
    bio: "Hello world",
  };

  beforeEach(() => {
    jest.clearAllMocks();

    (createClient as jest.Mock).mockReturnValue({
      auth: {
        getUser: jest.fn().mockResolvedValue({
          data: {
            user: {
              id: "user-123",
            },
          },
        }),
      },
    });

    (updateProfile as jest.Mock).mockResolvedValue({
      error: null,
    });

    (changePassword as jest.Mock).mockResolvedValue({
      error: null,
    });
  });

  it("saves profile successfully", async () => {
    const user = userEvent.setup();

    const onClose = jest.fn();

    render(
      <EditProfileModal
        profile={mockProfile as any}
        onClose={onClose}
      />
    );

    await user.click(
      screen.getByTestId("save-profile")
    );

    expect(updateProfile).toHaveBeenCalledWith(
      "user-123",
      "testuser",
      "Hello world"
    );

    expect(onClose).toHaveBeenCalled();

    expect(refreshMock).toHaveBeenCalled();
  });

  it("shows error when passwords do not match", async () => {
    const user = userEvent.setup();

    render(
      <EditProfileModal
        profile={mockProfile as any}
        onClose={jest.fn()}
      />
    );

    await user.type(
        screen.getByPlaceholderText(/^New password$/i),
        "password123"
    );

    await user.type(
        screen.getByPlaceholderText(/^Confirm new password$/i),
        "different123"
    );

    await user.click(
      screen.getByTestId("save-profile")
    );

    expect(
      screen.getByText(
        /passwords do not match/i
      )
    ).toBeInTheDocument();

    expect(changePassword).not.toHaveBeenCalled();
  });

  it("requires verification code when changing password", async () => {
    const user = userEvent.setup();

    render(
      <EditProfileModal
        profile={mockProfile as any}
        onClose={jest.fn()}
      />
    );

    await user.type(
        screen.getByPlaceholderText(/^New password$/i),
        "password123"
    );

    await user.type(
        screen.getByPlaceholderText(/^Confirm new password$/i),
        "password123"
    );

    await user.click(
      screen.getByTestId("save-profile")
    );

    expect(
      screen.getByText(
        /verification code required/i
      )
    ).toBeInTheDocument();

    expect(changePassword).not.toHaveBeenCalled();
  });
});
