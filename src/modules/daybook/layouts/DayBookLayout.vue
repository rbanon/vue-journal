<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col-4">
            <entry-list/>
        </div>
        <div class="col">            
            <router-view/>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from "vue"

    export default {
        components: {
            Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
            EntryList: defineAsyncComponent(() => import('../components/EntryList')),
        }
    }
</script>
