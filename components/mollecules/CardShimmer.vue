<template>
    <div class="card">
        <div class="card-body">
            <div class="shimmer">
                <div class="wrapper">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-4">
                            <div class="content animate"></div>
                        </div>
                        <div class="col-4">
                            <div class="content animate"></div>
                        </div>
                    </div>
                    <div class="content mt-3 animate"></div>
                    <div class="content mt-3 animate"></div>
                    <div class="content mt-3 animate"></div>
                    <div class="row mt-4 justify-content-between align-items-center">
                        <div class="col-6">
                            <div class="content animate"></div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="profilePic animate"></div>
                                <div class="profilePic animate"></div>
                                <div class="profilePic animate"></div>
                                <div class="profilePic animate"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.shimmer {

    .wrapper {
        width: 0px;
        animation: fullView 0.5s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .w80 {
        width: 80%;
    }
    .profilePic {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
    .content {
        height: 10px;
        background: #777;
        border-radius: 8px;
    }

    @keyframes fullView {
        100% {
            width: 100%;
        }
    }

    .animate {
        animation: shimmer 2s infinite linear;
        background: linear-gradient(
            to right,
            #eff1f3 4%,
            #e2e2e2 25%,
            #eff1f3 36%
        );
        background-size: 1000px 100%;
    }

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
}
</style>