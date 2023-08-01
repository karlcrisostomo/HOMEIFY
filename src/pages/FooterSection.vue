<template>
  <div class=" ">
    <div class="relative container mx-auto">
      <h1
        class="font-bold text-4xl sm:text-5xl max-sm:mt-20 sm:mt-32 lg:text-5.5xl text-center xl:text-8xl xl:p-2 lg:text-left text-transparent bg-gradient-to-tr bg-clip-text from-Dark-Teel to-Vibrant-Purple"
      >
        Get Exculsive Deals & Discount
      </h1>
      <div class="p-4 mt-24">
        <div>
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
                    :class="{
                      ' border-red-500 border-2 outline-red-500':
                        isInvalidEmail,
                    }"
                  />
                  <span v-if="isInvalidEmail" class="text-red-500"
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
          <footer class="">
            <div
              class="md:grid md:grid-cols-4 p-5 sm:max-w-sm sm:mx-auto md:max-w-none mt-12"
            >
              <div class="mb-6">
                <ul class="">
                  <h1 class="font-bold mb-2">Customer Care</h1>
                  <li class=""><a href="">How to buy</a></li>
                  <li><a href="">Shipping &amp; Delivery</a></li>
                  <li><a href="">International Product Policy</a></li>
                  <li><a href="">How to Return</a></li>
                </ul>
              </div>
              <div class="mb-6">
                <ul>
                  <h1 class="font-bold mb-2">Info</h1>
                  <li><a href="">About us</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Blog</a></li>
                </ul>
              </div>
              <div class="mb-6">
                <ul>
                  <h1 class="font-bold mb-2">Legal</h1>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms of Services</a></li>
                  <li><a href="">Shipping & Delivery</a></li>
                </ul>
              </div>
              <div
                class="flex md:grid md:grid-cols-2 mt-8 p-2 -translate-y-6 max-sm:max-w-xs sm:max-w-sm mx-auto"
              >
                <figure
                  v-for="icon in icons"
                  :key="icon.id"
                  class="p-2 w-full cursor-pointer"
                >
                  <a :href="icon.url" target="_blank"
                    ><img
                      class="hover:bg-white overflow-hidden transition-all duration-500"
                      :src="icon.src"
                      :alt="icon.alt"
                  /></a>
                </figure>
              </div>
            </div>

            <div class="">
              <h1
                class="flex justify-center mt-8 text-Ash-Grey font-medium max-sm:text-sm sm:text-base"
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

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const ico = require.context("@/assets/svgs", false, /\.svg$/);

const icons = ref([
  { id: 1, src: ico("./facebook_icon.svg"), alt: "facebook-logo", url: "/" },
  { id: 2, src: ico("./ig_icon.svg"), alt: "instagram-logo", url: "/" },
  { id: 3, src: ico("./twitter_icon.svg"), alt: "twitter-icon", url: "/" },
  {
    id: 4,
    src: ico("./github_icon.svg"),
    alt: "github-icon",
    url: "https://github.com/karlcrisostomo/HOMEIFY.git",
  },
]);

const email = ref("");
const message = ref("");
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

        email.value = "";
        message.value = "";
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
</script>

<style>
li {
  text-decoration: none;
  transition: text-decoration 1000ms ease-in-out;
}
li:hover {
  text-decoration: underline;
}
</style>
