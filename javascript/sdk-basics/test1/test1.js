/*
 * (c) 2018-2020 Ionic Security Inc.
 * By using this code, I agree to the Terms & Conditions (https://dev.ionic.com/use.html)
 * and the Privacy Policy (https://www.ionic.com/privacy-notice/).
 */

/*
 * WARNING *
 * Calling agent.enrollUser() successfully is a pre-requisite before using this code.
 * This is done when you enrolled your device after signing up for a tenant.
 */

// AppData for all Javascript samples: appId, userId, and userAuth needs to be the same
// as the appData that was used for enrollment.

const main = async () => {

  document.getElementById('output-area').innerHTML = 'This is test1';
  console.log('');
  console.log(`Created New Key and it is a secret.');

};

main();
