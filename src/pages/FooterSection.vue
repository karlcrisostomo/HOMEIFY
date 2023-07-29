<template>
  <div>
    <div class="relative top-32 container mx-auto">
      <h1
        class="font-bold text-4xl text-center text-transparent bg-gradient-to-tr bg-clip-text from-Dark-Teel to-Vibrant-Purple"
      >
        Get Exculsive Deals & Discount
      </h1>
      <div class="container mx-auto p-4 mt-14">
        <div>
          <h1 class="text-3xl font-bold mt-10">
            Get Exclusive Deals & Discount
          </h1>
          <div class="container mx-auto p-4">
            <div class="sm:max-w-sm sm:mx-auto">
              <form ref="form" @submit.prevent="sendEmail">
                <div>
                  <input
                    v-model="email"
                    class="rounded-md w-full h-10 p-2"
                    type="email"
                    name="user_email"
                    placeholder="example.email.com"
                    :class="{ ' border-red-500 border-2 outline-red-500': isInvalidEmail }"
                  />
                  <span  v-if="isInvalidEmail" class=" text-red-500"
                    >Please enter a valid email address.</span
                  >
                </div>
                <div>
                  <textarea
                    name="message"
                    v-model="message"
                    class="rounded-md w-full h-20 p-2 mt-4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    class="bg-Ash-Grey w-full mt-4 font-medium p-2 rounded-full hover:bg-gray-400 hover:font-medium"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="text-Ash-Grey lg:max-w-4xl lg:mx-auto">
          <footer>
            <div class="sm:grid sm:grid-cols-3 p-5 sm:translate-y-6">
              <div class="mb-6">
                <ul class="">
                  <li class="font-medium mb-2">Support</li>
                  <li><a href="">FAQ</a></li>
                  <li><a href=""> Contact Us</a></li>
                  <li><a href="">Returns</a></li>
                </ul>
              </div>
              <div class="mb-6">
                <ul>
                  <li class="font-medium mb-2">Info</li>
                  <li><a href="">About us</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Blog</a></li>
                </ul>
              </div>
              <div class="mb-6">
                <ul>
                  <li class="font-medium text-base mb-2">Legal</li>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms of Services</a></li>
                  <li><a href="">Shipping & Delivery</a></li>
                </ul>
              </div>
            </div>

            <div class="flex justify-evenly mt-8 sm:max-w-sm sm:mx-auto">
              <figure>
                <a href=""
                  ><img src="../assets/svgs/facebook_icon.svg" alt=""
                /></a>
              </figure>
              <figure>
                <a href=""> <img src="../assets/svgs/ig_icon.svg" alt="" /></a>
              </figure>
              <figure>
                <a href=""
                  ><img src="../assets/svgs/twitter_icon.svg" alt=""
                /></a>
              </figure>
              <figure>
                <a href="https://github.com/karlcrisostomo/Homeify.git"
                  ><img a src="../assets/svgs/github_icon.svg" alt=""
                /></a>
              </figure>
            </div>

            <div>
              <h1
                class="flex justify-center mt-8 text-Ash-Grey font-medium text-lg"
              >
                <span>©</span>2023 HOMEIFY-Furniture Paradise
              </h1>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

export default {
  setup() {
    const email = ref("");
    const message = ref(""); // Add the message variable here
    const isInvalidEmail = ref(false);
    const form = ref(null);

    const sendEmail = () => {
      if (!isValidEmail(email.value)) {
        isInvalidEmail.value = true;
      } else {
        // Use emailjs to send the form data
        emailjs
          .sendForm(
            "service_mcfslvx",
            "template_rb06l59",
            form.value,
            "mQh7Newi1TldZj_Cw"
          )
          .then((result) => {
            console.log("SUCCESS!", result.text);
            // Optionally reset the form fields after successful submission
            email.value = "";
            message.value = ""; // Reset the message field as well
            isInvalidEmail.value = false;
          })
          .catch((error) => {
            console.log("FAILED...", error.text);
          });
      }
    };

    const isValidEmail = (value) => {
      const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
      return emailRegex.test(value);
    };

    return {
      email,
      message, // Expose the message variable
      isInvalidEmail,
      sendEmail,
      form,
    };
  },
};
</script>
