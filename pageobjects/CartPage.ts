import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CartPage {
  private static readonly L = {
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', role: 'link', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    cartQuantityLabel: { strategy: 'css' as const, value: '[data-test="cart-quantity-label"]', actionKind: 'text' as const },
    cartDescLabel: { strategy: 'css' as const, value: '[data-test="cart-desc-label"]', actionKind: 'text' as const },
    item4Title: { strategy: 'css' as const, value: '[data-test="item-4-title-link"]', role: 'link', actionKind: 'link' as const },
    inventoryItemName: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', actionKind: 'text' as const },
    inventoryItemDesc: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', actionKind: 'text' as const },
    inventoryItemPrice: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', actionKind: 'text' as const },
    removeSauceLabsBackpackSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="remove-sauce-labs-backpack"]', role: 'button', scope: '[data-test="cart-contents-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    continueShoppingSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="continue-shopping"]', role: 'button', scope: '[data-test="cart-contents-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    checkoutSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="checkout"]', role: 'button', scope: '[data-test="cart-contents-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs, soft);
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.title), timeoutMs, soft);
  }

  async getInnerTextCartQuantityLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs, soft);
  }

  async getInnerTextCartDescLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs, soft);
  }

  async clickItem4Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async expectItem4TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.item4Title), timeoutMs, soft);
  }

  async getInnerTextInventoryItemName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async expectInventoryItemNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs, soft);
  }

  async getInnerTextInventoryItemDesc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs, soft);
  }

  async getInnerTextInventoryItemPrice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs, soft);
  }

  async clickRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async doubleClickRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs, soft);
  }

  async clickContinueShoppingSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async doubleClickContinueShoppingSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async expectContinueShoppingSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs, soft);
  }

  async clickCheckoutSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async doubleClickCheckoutSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async expectCheckoutSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Swag Labs', timeoutMs);
  }


  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.shoppingCart), substring, timeoutMs);
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.shoppingCart), count, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.title), substring, timeoutMs);
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.title), count, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async clickCartQuantityLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async doubleClickCartQuantityLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async longPressCartQuantityLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartQuantityLabel), expected, timeoutMs);
  }

  async expectCartQuantityLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartQuantityLabel), substring, timeoutMs);
  }

  async expectCartQuantityLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartQuantityLabel), value, timeoutMs);
  }

  async expectCartQuantityLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartQuantityLabel), count, timeoutMs);
  }

  async scrollCartQuantityLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async clickCartDescLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async doubleClickCartDescLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async longPressCartDescLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartDescLabel), expected, timeoutMs);
  }

  async expectCartDescLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartDescLabel), substring, timeoutMs);
  }

  async expectCartDescLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartDescLabel), value, timeoutMs);
  }

  async expectCartDescLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartDescLabel), count, timeoutMs);
  }

  async scrollCartDescLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async doubleClickItem4Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async longPressItem4Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async expectItem4TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.item4Title), expected, timeoutMs);
  }

  async expectItem4TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.item4Title), substring, timeoutMs);
  }

  async expectItem4TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.item4Title), value, timeoutMs);
  }

  async expectItem4TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.item4Title), count, timeoutMs);
  }

  async scrollItem4TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async clickInventoryItemName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async doubleClickInventoryItemName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async longPressInventoryItemName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async expectInventoryItemNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemName), expected, timeoutMs);
  }

  async expectInventoryItemNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemName), substring, timeoutMs);
  }

  async expectInventoryItemNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemName), value, timeoutMs);
  }

  async expectInventoryItemNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemName), count, timeoutMs);
  }

  async scrollInventoryItemNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async clickInventoryItemDesc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async doubleClickInventoryItemDesc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async longPressInventoryItemDesc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemDesc), expected, timeoutMs);
  }

  async expectInventoryItemDescContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemDesc), substring, timeoutMs);
  }

  async expectInventoryItemDescValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemDesc), value, timeoutMs);
  }

  async expectInventoryItemDescEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemDesc), count, timeoutMs);
  }

  async scrollInventoryItemDescIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async clickInventoryItemPrice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async doubleClickInventoryItemPrice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async longPressInventoryItemPrice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemPrice), expected, timeoutMs);
  }

  async expectInventoryItemPriceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemPrice), substring, timeoutMs);
  }

  async expectInventoryItemPriceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemPrice), value, timeoutMs);
  }

  async expectInventoryItemPriceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemPrice), count, timeoutMs);
  }

  async scrollInventoryItemPriceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async longPressRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), substring, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), value, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack), count, timeoutMs);
  }

  async scrollRemoveSauceLabsBackpackSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async longPressContinueShoppingSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async expectContinueShoppingSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), expected, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), substring, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), value, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), count, timeoutMs);
  }

  async scrollContinueShoppingSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async longPressCheckoutSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async expectCheckoutSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), expected, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), substring, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), value, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), count, timeoutMs);
  }

  async scrollCheckoutSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

}
