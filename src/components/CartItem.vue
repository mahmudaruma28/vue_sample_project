<template>
    <div>
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
                :src="cartItem.image"
                :alt="cartItem.name"
                class="w-full h-full object-center object-cover group-hover:opacity-75"
            >
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
            {{ cartItem.name }}
        </h3>
        <div>
            <br>
            <button @click="increaseQuantity(cartItem.productId)">
                Add
            </button>
            <br><br>
            <button @click="decreaseQuantity(cartItem.productId)">
                Minus
            </button>
            <br>
        </div>
        <p class="mt-1 text-lg font-medium text-gray-900">
            ${{ cartItem.price }} * {{ cartItem.quantity }}
        </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        cartItem: {
            type: Object,
            default: () => ({
                productId: null,
                name: null, 
                price: null,
                quantity: null
            })
        }
    },
    methods: {
        ...mapActions("cart", ["increaseQuantity", "decreaseQuantity"])
    }
}
</script>

<style>

</style>