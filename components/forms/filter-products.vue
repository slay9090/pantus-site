<template>
  <div class="filter-box filter-box__shadow block-radius">
    <b-button
      v-show="show === false"
      class="text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-0 cursor-pointer d-flex align-items-center justify-content-between w-100 block-shadow block-radius filters-btn"
      :class="[{ 'border-bottom-radius-0': show }]"
      @click="show = !show"
    >
      <img
        class="icon-filters mr-3"
        src="@img/icons/other-filters-red-5.svg"
        alt="Icon OtherFilters"
      />
      <span class="fz-5 font-weight-bold">Все фильтры</span>
      <b-icon-arrow-down-circle
        v-if="!show"
        class="cursor-pointer link-danger ml-3 arrow-icon-filters"
      />
      <b-icon-arrow-up-circle
        v-else
        class="cursor-pointer link-danger ml-3 arrow-icon-filters"
      />
    </b-button>
    <b-form v-show="show" class="border p-3">
      <!--      <b-button-->
      <!--        class="d-block d-lg-none text-666 border-e1 bg-transparent link-danger border-link-danger px-2 py-0 cursor-pointer mb-2"-->
      <!--        @click="show = false"-->
      <!--        >X</b-button-->
      <!--      >-->
      <!-- <Submit /> -->
      <!--      <VueRange />-->
      <!-- ЦЕНА-->
      <!-- БРЭНД -->
      <PanelBrand
        items="Бренд"
        name="brand"
        get-name="Brand/BrandAll/GetBrand"
        set-checbox="formSearch/SetAllBrandsChecked"
        get-checbox="formSearch/GetBrandsChecked"
      />
      <!-- Категории -->
      <Panel
        items="Категории"
        array-data="Categories/CategoriesAll/GetCategories"
        name="categories"
        set-value="Categories/CategoriesAll/SetCategories"
      />
 
        <div class="d-flex justify-content-between w-100 flex-wrap-reverse">
          <Submit />
          <Reset />
        </div>
    </b-form>
  </div>
</template>

<script>
import VueRange from "@/components/search/range";
import Panel from "@/components/search/panel/index";
import PanelBrand from "@/components/search/panel-brand/index";
import Reset from "@/components/search/buttons/buttons-reset";
import Submit from "@/components/search/buttons/button-submit";
export default {
  name: "FulterProducts",
  components: {
    VueRange,
    Panel,
    Reset,
    Submit,
    PanelBrand,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.arrow-icon-filters {
  font-size: 20px;
}

.icon-filters {
  opacity: 0.7;
}

.filters-btn {
  height: 50px;
}

.filters-btn:hover .icon-filters {
  opacity: 0.8;
  -webkit-animation: anim1 0.3s linear;
}

@-webkit-keyframes anim1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(15deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-15deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
</style>
