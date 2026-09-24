import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { EditProfileModal } from "@/app/(app)/dashboard/components/EditProfileModal";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe("EditProfileModal", () => {
  const mockProfile = {
    id: "123",
    username: "testuser",
    bio: "Hello world",
  } as any;

  function renderModal(onClose = jest.fn()) {
    return render(
      <EditProfileModal
        profile={mockProfile}
        onClose={onClose}
      />
    );
  }

  it("renders modal title", () => {
    renderModal();

    expect(
      screen.getByRole("heading", {
        name: /edit profile/i,
      })
    ).toBeInTheDocument();
  });

  it("renders profile data", () => {
    renderModal();

    expect(
        screen.getByText("testuser")
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("Hello world")
    ).toBeInTheDocument();
  });

  it("renders footer buttons", () => {
    renderModal();

    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /save changes/i,
      })
    ).toBeInTheDocument();
  });

  it("calls onClose when cancel is clicked", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    renderModal(onClose);

    await user.click(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
