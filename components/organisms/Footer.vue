<template>
    <footer class="footer">
        <div class="footer__widget">
            <div class="container">
                <div class="row clearfix">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <h3 class="footer__widget-title">Tentang Kami</h3>
                        <div class="footer__widget-text">
                            Platform pertama di Indonesia yang memberikan layanan
                            Berlangganan Bersama dengan pengguna lain (sharing subscription) ke
                            Penyedia Layanan Entertainment (Provider Entertainment) seperti Netflix,
                            Spotify, Youtube dan lainnya agar dapat menikmati fitur premium,
                            dengan proses berlangganan yang praktis, legal, aman dan murah.
                        </div>
                        <ul class="footer__widget-social">
                            <li>
                                <a href="https://seakun.id">
                                    <span class="fa fa-globe"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/seakun.id/">
                                    <span class="fa fa-instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:cs@seakun.id">
                                    <span class="fa fa-envelope"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <h3 class="footer__widget-title">Hubungi Kami</h3>
                        <div class="footer__widget-text">
                            <ul class="footer__widget-contact">
                                <div class="footer__widget-contact-icon">
                                    <span class="fa fa-phone"></span>
                                </div>
                                <li>+62857-7464-2738</li>
                                <li>cs@seakun.id</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <h3 class="footer__widget-title">Kirim Email</h3>
                        <div class="footer__widget-text">
                            Kirim Email Anda di bawah ini, untuk mendapatkan informasi lebih lanjut
                            tentang ketentuan dan layanan kami.
                        </div>
                        <div>
                            <form method="post">
                                <div class="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value
                                        placeholder="Your Email"
                                        required
                                    />
                                    <button type="submit">
                                        <span class="fa fa-paper-plane-o"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div>Copyright ©2020 seakun.id</div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background-color: #1c1c1c;
    text-align: center;

    .form-group {
        position: relative;
        margin: 0px;

        input {
            display: block;
            width: 100%;
            line-height: 24px;
            padding: 10px 40px 10px 25px;
            height: 48px;
            font-size: 14px;
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: none;
            border-radius: 24px;
            transition: all 500ms ease;
            font-family: inherit;

            &:focus {
                border: 1px solid #86d0c1;
                outline: -webkit-focus-ring-color auto 0px;
            }
        }

        button {
            position: absolute;
            right: 10px;
            top: 0px;
            width: 50px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 16px;
            background: none;
            cursor: pointer;
            border: none;
        }
    }

    &__widget {
        position: relative;
        color: #bbbbbb;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 100px 0;

        &-contact {
            margin: 0 0 10px;
            padding: 0px;

            &-icon {
                color: #86d0c1;
                position: relative;
                font-size: 32px;
                margin: 0 auto 20px;
                line-height: 36px;
            }

            li {
                margin-bottom: 7px;
                line-height: 24px;
                position: relative;
                display: block;
            }
        }

        &-social {
            margin: 0 0 10px;
            padding: 0px;
            li {
                display: inline-block;
                a {
                    position: relative;
                    display: block;
                    line-height: 38px;
                    width: 38px;
                    height: 38px;
                    text-align: center;
                    font-size: 13px;
                    background: rgba(255, 255, 2550, 0.05);
                    color: #bbbbbb;
                    transition: all 500ms ease;

                    &:hover {
                        background: #86d0c1;
                        color: #ffffff;
                    }
                }
            }
        }

        &-text {
            margin-bottom: 25px;
            line-height: 1.9em;
        }

        &-title {
            font-size: 1.4em;
            font-weight: 400;
            color: #ffffff;

            &::after {
                content: "";
                display: block;
                width: 50px;
                height: 2px;
                margin: 24px auto;
                background: #86d0c1;
            }
        }

        &.container {
            &::before {
                display: table;
                content: " ";
            }
            &::after {
                display: table;
                clear: both;
            }
        }
    }

    &__bottom {
        position: relative;
        text-align: center;
        padding: 18px 0 !important;
        line-height: 24px;
        color: #cccccc;
        background: #131313;
    }
    .container {
        max-width: 1120px !important;
        margin: 0 auto !important;
    }
    &__row {
        display: flex;
        p {
            margin-bottom: 0px;
        }
    }
    &__copyright {
        padding: 0px 0px !important;
        width: 70%;
    }
    &__policy {
        padding: 0px 16px !important;
        margin-left: auto;
    }
}
@media (max-width: 800px) {
    .footer {
        padding-top: 10px;
        &__row {
            padding: 10px 0px;
            display: block;
            margin-bottom: 0px;
            p {
                margin-bottom: 0px;
            }
        }
        &__copyright {
            width: auto !important;
        }
    }
}
</style>
