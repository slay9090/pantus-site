<template>
  <b-container>
    <Product v-if="ProductData.length !== 0" :dataset="ProductData[0]" />
    <h1 v-else class="error">Товар не найден</h1>
  </b-container>
</template>

<script>
import Product from "@/components/products/product/index";
export default {
  components: {
    Product,
  },
  async asyncData({ store, params, getters, redirect }) {
    await store.dispatch("Products/_ProductId", params.id);
    const Productid = store.getters["Products/GetProduct"];
    if (Productid.length === 0) {
      // Товар не найден
      redirect("/404");
    }
    const res = `${Productid[0].ProductCard.sku.normalized}-${Productid[0].ProductCard.brand.code}`;
    if (res !== params.articul) {
      // Товар с не коретным артикулем
      redirect(`/products/${Productid[0].ProductCard.id}/${res}`);
    }
  },
  head() {
    return {
      title: `${this.ProductData[0]?.ProductCard?.name} -  ${this.ProductData[0]?.ProductCard?.sku?.original} -  ${this.ProductData[0]?.ProductCard?.brand?.name}`,
      meta: [
        {
          name: "description",
          content: `${
            this.ProductData[0]?.ProductCard?.name
          }. Производитель - ${
            this.ProductData[0]?.ProductCard?.brand?.name
          }.Артикул -  ${
            this.ProductData[0]?.ProductCard?.sku?.original
          }. OEM - ${this.ProductData[0]?.ProductCard?.ProductCardOem?.join(
            " "
          )}`,
        },
        {
          name: "keywords",
          content: `${
            this.ProductData[0]?.ProductCard?.sku?.original
          } ${this.ProductData[0]?.ProductCard?.ProductCardOem?.join(", ")} ,${
            this.ProductData[0]?.ProductCard?.name
          }`,
        },
      ],
    };
  },
  computed: {
    ProductData() {
      return this.$store.getters["Products/GetProduct"];
    },
  },
  destroyed() {
    this.$store.commit("Products/analogs/ResetProducts");
  },
  async mounted() {
    const brand = this.ProductData[0]?.ProductCard?.brand?.name;
    const sku = this.ProductData[0]?.ProductCard?.sku?.original;
    if (brand && sku) {
      await this.$store.dispatch("Products/analogs/_Analogs", {
        brand,
        sku,
      });
    }
  },
};
</script>
