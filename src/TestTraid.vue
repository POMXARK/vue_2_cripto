<template>
<trading-vue :data="this.$data"></trading-vue>

</template>
<script>


import TradingVue from 'trading-vue-js'

// *, высота вверж, масштаб правая полоска конечное значение, *, предел

export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            titleTxt : 'LALALA',
            ohlcv: [
                [ 1551128400000, 10,  100, 1,  100 ],
                [ 1551132000000, 10,  100, 1,  100 ],

            ]
        }
    }
}




</script>