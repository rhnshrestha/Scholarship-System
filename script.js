function navigateToLink() {
  let select = document.getElementById('link-select');
  let userType = select.value || 'user';
  document.getElementById('user-type').value = userType;

  if(userType === 'admin') {
    adminSignUpPage();
  }else if(userType === 'college') {
    collegeSignUpPage();
  }else {
    userSignUpPage();
  }
}

let signUpSection = document.querySelector('.usertype-form-selection');
function userSignUpPage() {
  signUpSection.innerHTML = `<div class="signup-input-field">
              <label for="f_name">First Name</label><br>
              <input type="text" id="f_name" name="f_name" required aria-label="First Name">
            </div>
            <div class="signup-input-field">
              <label for="s_name">Last Name</label><br>
              <input type="text" id="s_name" name="s_name" required aria-label="Second Name">
            </div>
            <div class="signup-input-field">
              <label for="email">Email</label><br>
              <input type="email" id="email" name="email" required aria-label="Email">
            </div>
            <div class="signup-input-field">
              <label for="password">Password</label><br>
              <input type="password" id="password" name="password" required aria-label="Password">
            </div>
            <div class="signup-input-field">
              <label for="confirm-password">Confirm Password</label><br>
              <input type="password" id="confirm-password" name="confirm-password" required aria-label="Confirm Password">
            </div>`;
}

function adminSignUpPage() {
  signUpSection.innerHTML = `<div class="signup-input-field">
              <label for="f_name">First Name</label><br>
              <input type="text" id="f_name" name="f_name" required aria-label="First Name">
            </div>
            <div class="signup-input-field">
              <label for="s_name">Last Name</label><br>
              <input type="text" id="s_name" name="s_name" required aria-label="Second Name">
            </div>
            <div class="signup-input-field">
              <label for="email">Email</label><br>
              <input type="email" id="email" name="email" required aria-label="Email">
            </div>
            <div class="signup-input-field">
              <label for="password">Password</label><br>
              <input type="password" id="password" name="password" required aria-label="Password">
            </div>
            <div class="signup-input-field">
              <label for="confirm-password">Confirm Password</label><br>
              <input type="password" id="confirm-password" name="confirm-password" required aria-label="Confirm Password">
            </div>`;
}

function collegeSignUpPage() {
  signUpSection.innerHTML = `<div class="signup-input-field">
              <label for="c_name">College Name</label><br>
              <input type="text" id="c_name" name="c_name" required aria-label="College Name">
            </div>
            <div class="signup-input-field">
              <label for="address">Address</label><br>
              <input type="text" id="address" name="address" required aria-label="College Address">
            </div>
            <div class="signup-input-field">
              <label for="email">Email</label><br>
              <input type="email" id="email" name="email" required aria-label="Email">
            </div>
            <div class="signup-input-field">
              <label for="password">Password</label><br>
              <input type="password" id="password" name="password" required aria-label="Password">
            </div>
            <div class="signup-input-field">
              <label for="confirm-password">Confirm Password</label><br>
              <input type="password" id="confirm-password" name="confirm-password" required aria-label="Confirm Password">
            </div>`;
}

userSignUpPage();