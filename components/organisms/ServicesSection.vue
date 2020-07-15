<template>
    <div class="services">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="services__header-h3">Kemudahan apa saja yang kami berikan?</h3>
                    <p>Ada banyak kemudahan yang kami berikan jika menggunakan layanan kami, diantaranya sebagai berikut.</p>
                    <div class="services__content">
                        <div class="services__content-card">
                            <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTExIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iLjQ5OTU2NDk5MiIgeDI9IjUxMi40NjgxMjg4ODMyIiB5MT0iMjU1Ljk5OTc4MjkzNzYiIHkyPSIyNTUuOTk5NzgyOTM3NiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmMmZlIi8+PHN0b3Agb2Zmc2V0PSIuMDIwOCIgc3RvcC1jb2xvcj0iIzAzZWZmZSIvPjxzdG9wIG9mZnNldD0iLjI5MzEiIHN0b3AtY29sb3I9IiMyNGQyZmUiLz48c3RvcCBvZmZzZXQ9Ii41NTM4IiBzdG9wLWNvbG9yPSIjM2NiZGZlIi8+PHN0b3Agb2Zmc2V0PSIuNzk1NiIgc3RvcC1jb2xvcj0iIzRhYjBmZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRmYWNmZSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTQ5OC44MTY0MDYgMjk1LjU2MjUtMTk4LjYyODkwNiAxOTguODg2NzE5Yy0xMS43MTg3NSAxMS42OTkyMTktMjcuMTA1NDY5IDE3LjU1MDc4MS00Mi40ODgyODEgMTcuNTUwNzgxLTE1LjM3ODkwNyAwLTMwLjc1LTUuODQzNzUtNDIuNDU3MDMxLTE3LjUzMTI1bC0yMDAuOTc2NTYzLTE5OC43ODkwNjJjLTEzLjQ1NzAzMS0xMy40Mzc1LTE3LjQzNzUtMzMuMzcxMDk0LTEwLjIwNzAzMS01MC44NTU0NjkgNy4yNDIxODctMTcuNSAyNC4xNjc5NjgtMjguODA4NTk0IDQzLjEyNS0yOC44MDg1OTRoNjYuMjg5MDYydi01OC4wMDM5MDZjMC0xMS4wNDY4NzUgOC45NTcwMzItMjAuMDAzOTA3IDIwLjAwMzkwNi0yMC4wMDM5MDcgMTEuMDQ2ODc2IDAgMjAgOC45NTcwMzIgMjAgMjAuMDAzOTA3djc4LjAwMzkwNmMwIDExLjA0Njg3NS04Ljk1MzEyNCAyMC0yMCAyMGgtODYuMjkyOTY4Yy0zLjg4MjgxMyAwLTUuNTI3MzQ0IDIuNTcwMzEzLTYuMTYwMTU2IDQuMTA1NDY5LS43Njk1MzIgMS44NTU0NjgtMS4xNDA2MjYgNC42MDU0NjggMS40Mzc1IDcuMTgzNTk0bDIwMC45ODA0NjggMTk4Ljc4OTA2MmM3Ljg5NDUzMiA3Ljg4NjcxOSAyMC42MzI4MTMgNy44ODY3MTkgMjguNDY0ODQ0LjA2NjQwNmwxOTguNjA1NDY5LTE5OC44NjMyODFjMi41NzQyMTktMi41NzgxMjUgMi4xOTkyMTktNS4zMjgxMjUgMS40Mjk2ODctNy4xODM1OTQtLjYzMjgxMi0xLjUyNzM0My0yLjI3NzM0NC00LjA5NzY1Ni02LjE2MDE1Ni00LjA5NzY1NmgtODIuMjg5MDYyYy0xMS4wNDY4NzYgMC0yMC04Ljk1MzEyNS0yMC0yMHYtNzguMDA3ODEzYzAtMTEuMDQ2ODc0IDguOTUzMTI0LTIwIDIwLTIwIDExLjA0Njg3NCAwIDIwIDguOTUzMTI2IDIwIDIwdjU4LjAwMzkwN2g2Mi4yODkwNjJjMTguOTQxNDA2IDAgMzUuODYzMjgxIDExLjI5Njg3NSA0My4xMTMyODEgMjguNzgxMjUgNy4yMzgyODEgMTcuNDYwOTM3IDMuMjg1MTU3IDM3LjM5MDYyNS0xMC4wNzgxMjUgNTAuNzY5NTMxem0tMzY1LjMzOTg0NC0yNTUuNTU4NTk0YzExLjA0Njg3NiAwIDIwLTguOTU3MDMxIDIwLTIwLjAwMzkwNnMtOC45NTMxMjQtMjAtMjAtMjBjLTExLjA0Njg3NCAwLTIwLjAwMzkwNiA4Ljk1MzEyNS0yMC4wMDM5MDYgMjBzOC45NTcwMzIgMjAuMDAzOTA2IDIwLjAwMzkwNiAyMC4wMDM5MDZ6bTAgNzAuMDAzOTA2YzExLjA0Njg3NiAwIDIwLTguOTU3MDMxIDIwLTIwLjAwMzkwNiAwLTExLjA0Mjk2OC04Ljk1MzEyNC0yMC0yMC0yMC0xMS4wNDY4NzQgMC0yMC4wMDM5MDYgOC45NTcwMzItMjAuMDAzOTA2IDIwIDAgMTEuMDQ2ODc1IDguOTU3MDMyIDIwLjAwMzkwNiAyMC4wMDM5MDYgMjAuMDAzOTA2em0yNTAuMDE1NjI2LTcwLjAwMzkwNmMxMS4wNDY4NzQgMCAyMC04Ljk1NzAzMSAyMC0yMC4wMDM5MDZzLTguOTUzMTI2LTIwLTIwLTIwYy0xMS4wNDY4NzYgMC0yMCA4Ljk1MzEyNS0yMCAyMHM4Ljk1MzEyNCAyMC4wMDM5MDYgMjAgMjAuMDAzOTA2em0wIDcwLjAwMzkwNmMxMS4wNDY4NzQgMCAyMC04Ljk1NzAzMSAyMC0yMC4wMDM5MDYgMC0xMS4wNDI5NjgtOC45NTMxMjYtMjAtMjAtMjAtMTEuMDQ2ODc2IDAtMjAgOC45NTcwMzItMjAgMjAgMCAxMS4wNDY4NzUgOC45NTMxMjQgMjAuMDAzOTA2IDIwIDIwLjAwMzkwNnptLTExNC4zNzUgMTkwLjAxMTcxOWgtMjkuNzg1MTU3Yy00Ljc2NTYyNSAwLTkuODkwNjI1LTIuNzM4MjgxLTkuODkwNjI1LTguNzUgMC0xMS4wNDY4NzUtOC45NTcwMzEtMjAtMjAtMjAtMTEuMDQ2ODc1IDAtMjAuMDAzOTA2IDguOTUzMTI1LTIwLjAwMzkwNiAyMCAwIDI2LjcyNjU2MyAyMC45NDkyMTkgNDcuNzc3MzQ0IDQ4LjAyMzQzOCA0OC43MDcwMzF2MTEuMDQ2ODc2YzAgMTEuMDQ2ODc0IDguOTUzMTI0IDIwIDIwIDIwIDExLjA0Njg3NCAwIDIwLjAwMzkwNi04Ljk1MzEyNiAyMC4wMDM5MDYtMjB2LTExLjU4MjAzMmMyNy41MTE3MTgtMy44MjgxMjUgNDguMDIzNDM3LTI2LjM1NTQ2OCA0OC4wMjM0MzctNTQuNDIxODc1di0xMi4xNjAxNTZjMC0xNS4xMTMyODEtNS45MTc5NjktMjkuMjM0Mzc1LTE2LjY2MDE1Ni0zOS43NTM5MDYtMTAuNTg5ODQ0LTEwLjM3ODkwNy0yNC42OTUzMTMtMTYuMDg5ODQ0LTM5LjcxMDkzNy0xNi4wODk4NDRoLTE4LjMyODEyNmMtOC44MDg1OTMgMC0xNi4yNTM5MDYtNy43ODkwNjMtMTYuMjUzOTA2LTE3LjAwMzkwNnYtNy4yOTI5NjljMC04Ljk1MzEyNSA2Ljk4ODI4Mi0xNS43MDcwMzEgMTYuMjUzOTA2LTE1LjcwNzAzMWgxNy4zMzIwMzJjNS4wOTM3NSAwIDEwLjM2MzI4MSAzLjQxMDE1NiAxMC4zNjMyODEgOS4xMTcxODcgMCAxMS4wNDY4NzUgOC45NTcwMzEgMjAgMjAgMjAgMTEuMDQ2ODc1IDAgMjAuMDAzOTA2LTguOTUzMTI1IDIwLjAwMzkwNi0yMCAwLTIzLjk3MjY1Ni0xNy43MDMxMjUtNDMuOTcyNjU2LTQxLjAyMzQzNy00OC4yNTc4MTJ2LTEyLjg2MzI4MmMwLTExLjA0Njg3NC04Ljk1MzEyNS0yMC0yMC0yMHMtMjAuMDAzOTA2IDguOTUzMTI2LTIwLjAwMzkwNiAyMHYxMy41NTA3ODJjLTkuODk4NDM4IDIuMzM1OTM3LTE4Ljk2NDg0NCA3LjI2OTUzMS0yNi4zMjAzMTMgMTQuNDY0ODQ0LTEwLjcxMDkzNyAxMC40ODA0NjgtMTYuNjA5Mzc1IDI0LjU3ODEyNC0xNi42MDkzNzUgMzkuNjk1MzEydjcuMjkyOTY5YzAgMzEuNDMzNTkzIDI1LjIzODI4MSA1Ny4wMDM5MDYgNTYuMjU3ODEyIDU3LjAwMzkwNmgxOC4zMjgxMjZjOS4xNzk2ODcgMCAxNi4zNjcxODcgNi45NjA5MzcgMTYuMzY3MTg3IDE1Ljg0Mzc1djEyLjE2MDE1NmMwIDkuODQ3NjU3LTguMjM0Mzc1IDE1LTE2LjM2NzE4NyAxNXptMCAwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+" />
                            <h5>Legal dan Murah</h5>
                            <p>Dengan patungan, berlangganan platform digital premium jadi lebih murah dan tentunya legal.</p>
                        </div>
                        <div class="services__content-card">
                            <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyLjAwMDUgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIuMDAwMjUiIHgyPSI1MTIuMDAwMjUiIHkxPSIyNTUuOTk5MTI1IiB5Mj0iMjU1Ljk5OTEyNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBmMmZlIi8+PHN0b3Agb2Zmc2V0PSIuMDIwOCIgc3RvcC1jb2xvcj0iIzAzZWZmZSIvPjxzdG9wIG9mZnNldD0iLjI5MzEiIHN0b3AtY29sb3I9IiMyNGQyZmUiLz48c3RvcCBvZmZzZXQ9Ii41NTM4IiBzdG9wLWNvbG9yPSIjM2NiZGZlIi8+PHN0b3Agb2Zmc2V0PSIuNzk1NiIgc3RvcC1jb2xvcj0iIzRhYjBmZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRmYWNmZSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTMyOS4wNzQyMTkgNDA5Ljg1NTQ2OWMxMi41OTc2NTYgMTIuNjAxNTYyIDMuNjc1NzgxIDM0LjE0NDUzMS0xNC4xNDQ1MzEgMzQuMTQ0NTMxaC0yMzQuOTI5Njg4Yy00NC4xODM1OTQgMC04MC0zNS44MTY0MDYtODAtODB2LTIxNmMwLTYuMTgzNTk0LjcwNzAzMS0xMi4yMDcwMzEgMi4wNDI5NjktMTcuOTg4MjgxIDMuNTIzNDM3LTE1LjI3MzQzOCAyMi41MzkwNjItMjAuNjQ4NDM4IDMzLjYyNS05LjU2MjUgNC44NzUgNC44NzUgNi44Nzg5MDYgMTEuOTEwMTU2IDUuMzM5ODQzIDE4LjYyODkwNi0uNjYwMTU2IDIuODcxMDk0LTEuMDA3ODEyIDUuODU1NDY5LTEuMDA3ODEyIDguOTIxODc1djI2LjEyMTA5NGg0NS4wNTQ2ODhjNS4zMDA3ODEgMCAxMC4zOTA2MjQgMi4xMDU0NjggMTQuMTQwNjI0IDUuODU5Mzc1IDEyLjU5NzY1NyAxMi41OTc2NTYgMy42NzU3ODIgMzQuMDE5NTMxLTE0LjE0MDYyNCAzNC4wMTk1MzFoLTQ1LjA1NDY4OHYxNTBjMCAyMi4wODk4NDQgMTcuOTEwMTU2IDQwIDQwIDQwaDIzNC45Mjk2ODhjNS4zMDQ2ODcgMCAxMC4zOTQ1MzEgMi4xMDU0NjkgMTQuMTQ0NTMxIDUuODU1NDY5em0xNDIuOTI1NzgxLTE0NS43MzQzNzV2LTUwaC0yMjkuNTkzNzVsMTg5Ljg3MTA5NCAxODkuODcxMDk0YzIxLjkyOTY4Ny0uMTUyMzQ0IDM5LjcyMjY1Ni0xOC4wMzEyNSAzOS43MjI2NTYtMzkuOTkyMTg4IDAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwYzAgMzIuMzEyNS0xOS4yNjk1MzEgNjAuMTkxNDA2LTQ2LjkxMDE1NiA3Mi44MDQ2ODhsNDEuMDUwNzgxIDQxLjA1MDc4MWM3LjgxMjUgNy44MTI1IDcuODEyNSAyMC40NzY1NjIgMCAyOC4yODUxNTYtMy45MDIzNDQgMy45MDYyNS05LjAxOTUzMSA1Ljg1OTM3NS0xNC4xNDA2MjUgNS44NTkzNzUtNS4xMTcxODggMC0xMC4yMzgyODEtMS45NTMxMjUtMTQuMTQwNjI1LTUuODU5Mzc1bC00NzItNDcyYy03LjgxMjUtNy44MDg1OTQtNy44MTI1LTIwLjQ3MjY1NiAwLTI4LjI4MTI1IDcuODA4NTk0LTcuODEyNSAyMC40NzI2NTYtNy44MTI1IDI4LjI4MTI1IDBsNjIuMTQ0NTMxIDYyLjE0MDYyNWgzMzUuNzE0ODQ0YzQ0LjExMzI4MSAwIDgwIDM1Ljg4NjcxOSA4MCA4MHYxMTYuMTIxMDk0YzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMHptMC05MHYtMjYuMTIxMDk0YzAtMjIuMDU4NTk0LTE3Ljk0NTMxMi00MC00MC00MGgtMjk1LjcxNDg0NGw2Ni4xMjEwOTQgNjYuMTIxMDk0em0wIDAiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=" />
                            <h5>Tanpa Kartu Kredit</h5>
                            <p>Tidak punya kartu kredit? Tenang, semua fitur premium tetap bisa dinikmati. Kami yang uruskan buat kamu.</p>
                        </div>
                        <div class="services__content-card">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMC41NjE1IiB5MT0iMjU3LjI3NCIgeDI9IjUxMi41NjI5IiB5Mj0iMjU3LjI3NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLjk5ODIgMCAwIC0wLjk5ODIgLTAuMDkwMSA1MTIuODAxNSkiPg0KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEYyRkUiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjAyMSIgc3R5bGU9InN0b3AtY29sb3I6IzAzRUZGRSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMjkzIiBzdHlsZT0ic3RvcC1jb2xvcjojMjREMkZFIi8+DQoJPHN0b3AgIG9mZnNldD0iMC41NTQiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQ0JERkUiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjc5NiIgc3R5bGU9InN0b3AtY29sb3I6IzRBQjBGRSIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM0RkFDRkUiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGQ9Ik0yMzcuMDM1LDQ3MS4xMzNINjEuMDUyYy04LjUyMiwwLTEzLjY2NC00Ljc1Ny0xNS45Ny03LjU5Mg0KCWMtMy45ODItNC44OTYtNS41MjMtMTEuMjY5LTQuMjI4LTE3LjQ4N2MyMC43MTgtOTkuNTE0LDEwOC40OTUtMTcyLjIwNiwyMDkuODYxLTE3NC42NTVjMS43NTQsMC4wNjgsMy41MTUsMC4xMDIsNS4yODQsMC4xMDINCgljMS43NzMsMCwzLjUzNy0wLjAzNCw1LjI5My0wLjEwMmM1MS4zMTgsMS4yMzMsMTAwLjU5NCwyMC4zNjEsMTM5LjI3Niw1NC4xNzljOC4zMDIsNy4yNTcsMjAuOTEzLDYuNDEsMjguMTY5LTEuODkxDQoJYzcuMjU3LTguMzAxLDYuNDEtMjAuOTEyLTEuODkxLTI4LjE2OWMtMjYuMzUzLTIzLjAzOS01Ni44NjMtNDAuMzA5LTg5LjU5NS01MS4wODZjMzMuMDY0LTI0Ljc4Miw1NC40OTYtNjQuMjc3LDU0LjQ5Ni0xMDguNjgzDQoJQzM5MS43NDksNjAuODk3LDMzMC44NTMsMCwyNTUuOTk5LDBzLTEzNS43NSw2MC44OTctMTM1Ljc1LDEzNS43NWMwLDQ0LjQyMywyMS40NDksODMuOTMsNTQuNTM0LDEwOC43MTENCgljLTMwLjMxMyw5Ljk4LTU4Ljc1NiwyNS41MDgtODMuNjUsNDUuOTgzYy00NS42NDgsMzcuNTQ4LTc3LjM4Niw4OS45Mi04OS4zNjcsMTQ3LjQ3MWMtMy43NTUsMTguMDMzLDAuNzQ0LDM2LjU1NSwxMi4zNCw1MC44MTUNCgljMTEuNTQsMTQuMTkxLDI4LjY1MSwyMi4zMjksNDYuOTQ3LDIyLjMyOWgxNzUuOTgzYzExLjAyNiwwLDE5Ljk2My04LjkzOCwxOS45NjMtMTkuOTYzDQoJQzI1Ni45OTksNDgwLjA3MSwyNDguMDYsNDcxLjEzMywyMzcuMDM1LDQ3MS4xMzN6IE0xNjAuMTc3LDEzNS43NTFjMC01Mi44MzgsNDIuOTg2LTk1LjgyNCw5NS44MjQtOTUuODI0DQoJczk1LjgyMyw0Mi45ODYsOTUuODIzLDk1LjgyNGMwLDUxLjIxNS00MC4zODYsOTMuMTczLTkwLjk4Myw5NS43MDNjLTEuNjEyLTAuMDMtMy4yMjUtMC4wNDUtNC44NC0wLjA0NQ0KCWMtMS42MDksMC0zLjIxNywwLjAxNi00LjgyMywwLjA0NkMyMDAuNTcxLDIyOC45MzMsMTYwLjE3NywxODYuOTcxLDE2MC4xNzcsMTM1Ljc1MXogTTUwNy43OTksMzUzLjkzNWwtOTguOCwxMzguMDA2DQoJYy0wLjIxNiwwLjMwMS0wLjQzOSwwLjU5Ni0wLjY3MSwwLjg4NGMtOC45NjksMTEuMTYyLTIyLjMwOCwxOC4xMTEtMzYuNTk2LDE5LjA2M2MtMS4xMywwLjA3Ni0yLjI2MiwwLjExMy0zLjM4OSwwLjExMw0KCWMtMTMuMTE2LDAtMjUuODYzLTUuMDU3LTM1LjQxNS0xNC4xNDljLTAuMDYtMC4wNTctMC4xMi0wLjExNS0wLjE3OS0wLjE3MmwtNjMuNzA0LTYyLjE2N2MtNy44OS03LjcwMS04LjA0NS0yMC4zNC0wLjM0NS0yOC4yMw0KCWM3LjctNy44OTEsMjAuMzQtOC4wNDUsMjguMjMtMC4zNDVsNjMuNTk1LDYyLjA2MWMzLjEzNywyLjk0LDYuNjk0LDMuMTc0LDguNTQ5LDMuMDUxYzEuODA0LTAuMTIsNS4xNzEtMC43OTMsNy44NTktMy45MDkNCglsOTguNC0xMzcuNDQ3YzYuNDE3LTguOTY1LDE4Ljg4Ny0xMS4wMywyNy44NTMtNC42MTJDNTEyLjE1MiwzMzIuNTAxLDUxNC4yMTYsMzQ0Ljk3MSw1MDcuNzk5LDM1My45MzV6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                            <h5>Teman Berlangganan</h5>
                            <p>Kami carikan teman yang satu keinginan dengan kamu untuk berlangganan fitur platform digital premium.</p>
                        </div>
                    </div>
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
.services {
    padding: 40px 0px !important;
    margin-top: 200px;
    .col {
        text-align: center;
        h3 {
            margin-bottom: 20px !important;
            font-weight: 700;
        }
        p {
            margin: 0 auto;
            max-width: 600px;
            margin-top: 30px;
            margin-bottom: 40px;
        }
        button {
            margin: 10px;
            padding: 6px 35px !important
        }
    }
    .container {
        max-width: 1120px!important;
        font-weight: 500 !important;
        margin: 0 auto !important;
    }
    &__img {
        img {
            width: 50rem;
        }
    }
    .row {
        padding: 0px 8px !important;
    }
    &__content {
        display: flex;
        justify-content: center;
        &-card {
            width: 18rem;
            margin: 10px 40px;
            text-align: left;
            padding: 16px 24px;
            border: 1px solid #eeeeee;
            border-radius: 8px;
            box-shadow: 0px 0px 4px #dddddd;
            cursor: pointer;
            transition: transform .2s;
            &:hover {
                box-shadow: 0px 0px 16px #dddddd;
                transform: scale(1.2);
            }
            img {
                margin-top: 8px;
                max-width: 5rem;
                margin-bottom: 20px;
            }
        }
    }
}
@media (max-width: 800px) {
    .services {
        padding: 0px 0px !important;
        margin-top: 180px;
        &__img {
            text-align: center;
            margin-top: 20px;
        }
        &__content {
            display: block;
            &-card {
                margin: 25px 40px;
                width: auto;
                p {
                    margin: 0px !important;
                }
            }
        }
        &__header {
            &-h3 {
                font-size: 22px;
            }
        }
        img {
            width: 180px!important;
            margin: 16px auto;
        }
        .row {
            display:block;
        }
        h2 {
            font-size: 20px;
        }
    }
}
@media  only screen and (min-width: 880px) and (max-width: 1020px) {
    .container {
        display: contents!important;
    }
}
</style>