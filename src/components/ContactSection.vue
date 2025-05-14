<template>
  <section class="text-white mt-20" id="contact">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
      Let's Connect
    </h2>
    <div
      class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8"
      data-aos="zoom-in-up"
    >
      <div>
        <!-- <p class="text-[#adb7be]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias
                    quibusdam officia at,
                    a quis cumque ea aperiam omnis minima quam. Modi necessitatibus odit corporis at dolorem quae iusto
                    aliquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, porro!
                </p> -->
        <div class="col-lg-4 col-md-4 mb-lg-0 mt-5">
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #111a3e;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/metro/50/ffffff/new-post.png"
                alt="new-post"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>Email</h4>
              <a href="mailto:toandoan2804@gmail.com">toandoan2804@gmail.com</a>
            </div>
          </div>
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #111a3e;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>Phone</h4>
              <p>0786766963</p>
            </div>
          </div>
          <div class="flex mb-10 items-center">
            <div
              class="p-2"
              style="
                background: #111a3e;
                width: 50px;
                height: 46px;
                display: flex;
                justify-content: center;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid#111a3e;
                backdrop-filter: blur(9px);
                -webkit-backdrop-filter: blur(9px);
              "
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/git.png"
                alt="linkedin"
                class="w-6"
              />
            </div>
            <div class="ml-5 text-white">
              <h4>GitHub</h4>
              <a href="https://github.com/ToanDC28" target="_blank"
                >https://github.com/ToanDC28</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          background: #111a3e;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #111a3e;
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
        "
      >
        <form
          @submit.prevent="sendEmail"
          class="flex flex-col p-2"
          data-aos="zoom-in-up"
        >
          <div class="mb-6">
            <label for="email" class="text-white block mb-2 text-sm font-medium"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="email@gmail.com"
              name="email"
            />
          </div>
          <div class="mb-6">
            <label for="name" class="text-white block mb-2 text-sm font-medium"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
              name="name"
            />
          </div>
          <div class="mb-6">
            <label
              for="subject"
              class="text-white block mb-2 text-sm font-medium"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="subject"
              name="subject"
            />
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="text-white block mb-2 text-sm font-medium"
              >Message</label
            >
            <textarea
              id="message"
              v-model="formData.message"
              required
              class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ... "
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent hover:bg-opacity-90 transition-all duration-300"
            :disabled="loading"
          >
            {{ loading ? "Sending..." : "Send Message" }}
          </button>
        </form>
      </div>
      <div
        class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
      ></div>
    </div>

    <!-- Success Toast -->
    <div
      v-if="showSuccess"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      Message sent successfully!
    </div>

    <!-- Error Toast -->
    <div
      v-if="showError"
      class="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
    >
      {{ errorMessage }}
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const formData = ref({
  email: "",
  name: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref("");

const sendEmail = async () => {
  loading.value = true;
  try {
    await emailjs.send(
      "service_avtqj6n", // Thay thế bằng Service ID của bạn
      "template_2w6a42l", // Thay thế bằng Template ID của bạn
      {
        from_email: formData.value.email,
        name: formData.value.name,
        subject: formData.value.subject,
        message: formData.value.message,
      },
      "mqy0DSUR1ZyUbcA0V" // Thay thế bằng Public Key của bạn
    );

    // Reset form
    formData.value = {
      email: "",
      subject: "",
      message: "",
    };

    // Show success message
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  } catch (error) {
    console.error("Error sending email:", error);
    errorMessage.value = "Failed to send message. Please try again.";
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 3000);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>
