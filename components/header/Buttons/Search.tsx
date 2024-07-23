import Button from "../../../components/ui/Button.tsx";
import Icon from "../../../components/ui/Icon.tsx";
import { useUI } from "../../../sdk/useUI.ts";

export default function SearchButton() {
  const { displaySearchDrawer, displaySearchPopup } = useUI();

  return (
    <>
      <Button
        class="hidden btn-circle btn-sm btn-ghost"
        aria-label="search icon button"
        onClick={() => {
          displaySearchPopup.value = !displaySearchPopup.value;
        }}
      >
        <Icon id="MagnifyingGlass" size={20} strokeWidth={0.1} />
      </Button>
      <Button
        class="hidden btn-circle btn-sm btn-ghost"
        aria-label="search icon button"
        onClick={() => {
          displaySearchDrawer.value = !displaySearchDrawer.value;
        }}
      >
        <Icon id="MagnifyingGlass" size={20} strokeWidth={0.1} />
      </Button>
    </>
  );
}
