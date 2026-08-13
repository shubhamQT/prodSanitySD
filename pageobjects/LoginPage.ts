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

export class LoginPage {
  private static readonly L = {
    username: { strategy: 'css' as const, value: '[data-test="username"]', role: 'textbox', actionKind: 'textbox' as const },
    password: { strategy: 'css' as const, value: '[data-test="password"]', role: 'textbox', actionKind: 'textbox' as const },
    login: { strategy: 'css' as const, value: '[data-test="login-button"]', role: 'textbox', actionKind: 'generic' as const },
    loginCredentials: { strategy: 'css' as const, value: '[data-test="login-credentials"]', actionKind: 'text' as const },
    acceptedUsernamesAre: { strategy: 'role' as const, value: 'Accepted usernames are:', role: 'heading', level: 4, actionKind: 'text' as const },
    loginPassword: { strategy: 'css' as const, value: '[data-test="login-password"]', actionKind: 'text' as const },
    passwordForAllUsers: { strategy: 'role' as const, value: 'Password for all users:', role: 'heading', level: 4, actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async getUsernameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async expectUsernameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.username), timeoutMs, soft);
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async getPasswordValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async expectPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.password), timeoutMs, soft);
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.login), timeoutMs, soft);
  }

  async getInnerTextLoginCredentials(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async expectLoginCredentialsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs, soft);
  }

  async getInnerTextAcceptedUsernamesAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs, soft);
  }

  async getInnerTextLoginPassword(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async expectLoginPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs, soft);
  }

  async getInnerTextPasswordForAllUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs, soft);
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

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }


  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.username), substring, timeoutMs);
  }

  async expectUsernameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.username), value, timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.username), count, timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.password), substring, timeoutMs);
  }

  async expectPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.password), value, timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.password), count, timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.login), substring, timeoutMs);
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.login), value, timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.login), count, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async clickLoginCredentials(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async doubleClickLoginCredentials(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async longPressLoginCredentials(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async expectLoginCredentialsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginCredentials), expected, timeoutMs);
  }

  async expectLoginCredentialsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginCredentials), substring, timeoutMs);
  }

  async expectLoginCredentialsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginCredentials), value, timeoutMs);
  }

  async expectLoginCredentialsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginCredentials), count, timeoutMs);
  }

  async scrollLoginCredentialsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async clickAcceptedUsernamesAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async doubleClickAcceptedUsernamesAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async longPressAcceptedUsernamesAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), expected, timeoutMs);
  }

  async expectAcceptedUsernamesAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), substring, timeoutMs);
  }

  async expectAcceptedUsernamesAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), value, timeoutMs);
  }

  async expectAcceptedUsernamesAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), count, timeoutMs);
  }

  async scrollAcceptedUsernamesAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async clickLoginPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async doubleClickLoginPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async longPressLoginPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async expectLoginPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginPassword), substring, timeoutMs);
  }

  async expectLoginPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginPassword), value, timeoutMs);
  }

  async expectLoginPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginPassword), count, timeoutMs);
  }

  async scrollLoginPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async clickPasswordForAllUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async doubleClickPasswordForAllUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async longPressPasswordForAllUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.passwordForAllUsers), expected, timeoutMs);
  }

  async expectPasswordForAllUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.passwordForAllUsers), substring, timeoutMs);
  }

  async expectPasswordForAllUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.passwordForAllUsers), value, timeoutMs);
  }

  async expectPasswordForAllUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.passwordForAllUsers), count, timeoutMs);
  }

  async scrollPasswordForAllUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

}
