<template>
    <div class="card">
        <div class="card-body">
            <div class="shimmer">
                <div class="wrapper">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-4">
                            <div class="content animate"></div>
                            <div class="content animate mt-3"></div>
                        </div>
                        <div class="col-4">
                            <div class="content animate"></div>
                        </div>
                    </div>
                    <div class="content mt-3 animate"></div>
                    <div class="content mt-3 animate"></div>
                    <div class="content mt-3 animate"></div>
                    <div class="content mt-3 animate"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: none;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

    .shimmer {
        .wrapper {
            width: 0px;
            animation: fullView 0.5s forwards
                cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
}
</style>