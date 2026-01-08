// sw.js is a placeholder for a service worker file.
// You can add your service worker logic here.
// this works in background to enable PWA features.



// Install event
self.addEventListener("install", (event) => {
  console.log("Service Worker installed")
})

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated")
})

// Fetch event (cache or just log requests)
self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url)
})
