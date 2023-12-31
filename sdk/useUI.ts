/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchPopup = signal(false);
const displaySearchDrawer = signal(false);

const quantityPdp = signal(1);
const displayCombinador = signal(false);
const benefitsPopup = signal(false);
const skusCombination = signal([]);

const state = {
  displayCart,
  displayMenu,
  displaySearchPopup,
  benefitsPopup,
  displaySearchDrawer,
  quantityPdp,
  displayCombinador,
  skusCombination,
};

export const useUI = () => state;
