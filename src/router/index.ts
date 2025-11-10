import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Credits from '../views/Credits.vue'
import Contact from '../views/Contact.vue'
import WeddingInvitations from '../views/WeddingInvitations.vue'
import NewspaperAdvertisements from '../views/NewspaperAdvertisements.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/credits', name: 'Credits', component: Credits },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/wedding-invitations', name: 'WeddingInvitations', component: WeddingInvitations },
  { path: '/newspaper-advertisements', name: 'NewspaperAdvertisements', component: NewspaperAdvertisements }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
