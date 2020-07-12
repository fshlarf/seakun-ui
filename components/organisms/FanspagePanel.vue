<template>
    <div class="fanspage">
        <div class="container">
            <div class="fanspage__title">
                <p>Bagikan jika Anda menyukai halaman ini</p>
            </div>
            <div class="fanspage__channel">
                <div class="fanspage__channel-label">
                    <i class="fa fa-facebook-square fb"></i>  
                    <button type="button" class="btn btn-primary btn-sm">80K</button>
                </div>
                <div class="fanspage__channel-label">
                    <i class="fa fa-twitter-square tw"></i>  
                    <button type="button" class="btn btn-primary btn-sm">450</button>
                </div>
                <div class="fanspage__channel-label">
                    <i class="fa fa-google-plus-square gg"></i>  
                    <button type="button" class="btn btn-primary btn-sm">1900</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fanspage {
    padding: 25px 0px;
    background-color: #f7f7f7;
    .container {
        max-width: 1120px!important;
        margin: 0 auto !important;
        display: flex;
    }
    &__title {
        width: 65%;
        p {
            padding-top: 5px;
            font-weight: 600 !important;
        }
    }
    &__channel {
        display: flex;
        &-label {
            margin-right: 10px;
            button {
                border-radius: 4px!important;
                color: #ccc;
                background-color: white!important;
                border-color: #ccc;
                margin-top: -17px!important;
                padding: 6px 15px!important;
            }
            i {
                font-size: 40px;
            }
            .fb {
                color: #23599b;
            }
            .tw {
                color: #00aef1;
            }
            .gg {
                color: #fc4a35;
            }
        }
    }
}
@media (max-width: 800px) {
    .fanspage__title {
        width: 100%!important;
        p {
            padding-top: 5px;
            font-weight: 600 !important;
            font-size: 13px;
        }
    }
    .container {
        display: block!important;
    }
}
</style>