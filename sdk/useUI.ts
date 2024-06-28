/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchPopup = signal(true);
const displaySearchDrawer = signal(false);
const displaySeloRolex = signal(false);
const currentBannerRolex = signal(0);

const state = {
  displayCart,
  displayMenu,
  displaySearchPopup,
  displaySearchDrawer,
  displaySeloRolex,
  currentBannerRolex,
};

// Keyboard event listeners
addEventListener("keydown", (e: KeyboardEvent) => {
  const isK = e.key === "k" || e.key === "K" || e.keyCode === 75;

  // Open Searchbar on meta+k
  if (e.metaKey === true && isK) {
    displaySearchPopup.value = true;
  }
});

export const useUI = () => state;
