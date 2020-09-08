<template>
    <div>
        <Header />
        <div class="info">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <Title title="Program User Host Seakun.id" />
                        <div class="info__intro">
                            Program User Host merupakan fitur yang dihadirkan oleh Seakun.id untuk <b>memberikan kewenangan ke salah satu anggota 
                            member di dalam satu grup berlangganan bersama untuk menggunakan kartu debit/kredit miliknya untuk melakukan pembayaran</b> 
                            ke Provider Entertainment.
                        </div>
                        <br>
                        <div class="info__intro">
                            Jika kamu menjadi <b>User Host</b> di Seakun.id, kamu akan mendapatkan benefit dari Seakun.id yaitu sebagai berikut.
                        </div>
                        <div class="info__benefits">
                            <div class="info__benefits-card">
                                <img alt="Image not found" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ1NyA1MTJoLTIyMGMtMzAuMzI3IDAtNTUtMjQuNjczLTU1LTU1di0yNjBjMC0zLjI0NSAxLjA1My02LjQwMyAzLTlsOTAtMTIwYzIuODMzLTMuNzc3IDcuMjc4LTYgMTItNmgxMjBjNC43MjIgMCA5LjE2NyAyLjIyMyAxMiA2bDkwIDEyMGMxLjk0NyAyLjU5NyAzIDUuNzU1IDMgOXYyNjBjMCAzMC4zMjctMjQuNjczIDU1LTU1IDU1eiIgZmlsbD0iI2ZmODY1OSIvPjxwYXRoIGQ9Im01MDkgMTg4LTkwLTEyMGMtMi44MzMtMy43NzctNy4yNzgtNi0xMi02aC02MHY0NTBoMTEwYzMwLjMyNyAwIDU1LTI0LjY3MyA1NS01NXYtMjYwYzAtMy4yNDUtMS4wNTMtNi40MDMtMy05eiIgZmlsbD0iI2ZmNjMyNiIvPjxwYXRoIGQ9Im0xNzEuNjQ3IDQ0Mi44MDEtMTU1LjU2NC0xNTUuNTY0Yy0yMS40NDUtMjEuNDQ1LTIxLjQ0NS01Ni4zMzcgMC03Ny43ODJsMTgzLjg0OC0xODMuODQ3YzIuMjk1LTIuMjk1IDUuMjcyLTMuNzgzIDguNDg1LTQuMjQzbDE0OC40OTMtMjEuMjEzYzQuNjc0LS42NjggOS4zODkuOTA0IDEyLjcyOCA0LjI0M2w4NC44NTMgODQuODUzYzMuMzM5IDMuMzM5IDQuOTEgOC4wNTQgNC4yNDMgMTIuNzI4bC0yMS4yMTMgMTQ4LjQ5MmMtLjQ1OSAzLjIxMy0xLjk0OCA2LjE5MS00LjI0MyA4LjQ4NWwtMTgzLjg0OCAxODMuODQ4Yy0yMS40NDUgMjEuNDQ0LTU2LjMzOCAyMS40NDQtNzcuNzgyIDB6IiBmaWxsPSIjZmZmMTZiIi8+PHBhdGggZD0ibTQzNy41MTkgMjUwLjQ2OCAyMS4yMTMtMTQ4LjQ5MmMuNjY4LTQuNjc0LS45MDQtOS4zODktNC4yNDMtMTIuNzI4bC00Mi40MjYtNDIuNDI2LTMxOC4xOTggMzE4LjE5NyA3Ny43ODIgNzcuNzgyYzIxLjQ0NSAyMS40NDUgNTYuMzM3IDIxLjQ0NSA3Ny43ODIgMGwxODMuODQ4LTE4My44NDhjMi4yOTQtMi4yOTUgMy43ODMtNS4yNzIgNC4yNDItOC40ODV6IiBmaWxsPSIjZmZiNDU0Ii8+PHBhdGggZD0ibTE3OC43MjQgMzUwLjg4N2MtMy44OTEtMy44OTEtNS40ODgtOS43ODUtMy42MjktMTUuMzZsNzAuNzExLTIxMi4xMzJjMi42MTktNy44NTkgMTEuMTE0LTEyLjEwNyAxOC45NzMtOS40ODcgNy44NjIgMi42MTkgMTIuMTA2IDExLjExMyA5LjQ4NyAxOC45NzNsLTcwLjcxMSAyMTIuMTMyYy0yLjYxOSA3Ljg1OS0xMS4xMTQgMTIuMTA3LTE4Ljk3MyA5LjQ4Ny0yLjI4NS0uNzYxLTQuMjY0LTIuMDE5LTUuODU4LTMuNjEzeiIgZmlsbD0iI2ZmNzAzOCIvPjxwYXRoIGQ9Im0zNDguNDM4IDIwMi4zN2MtMTcuNTU0LTE3LjU1NC00Ni4xMTUtMTcuNTU0LTYzLjY2OSAwcy0xNy41NTQgNDYuMTE1IDAgNjMuNjY5IDQ2LjExNSAxNy41NTQgNjMuNjY5IDAgMTcuNTU0LTQ2LjExNiAwLTYzLjY2OXptLTIxLjIyMyA0Mi40NDZjLTUuODUxIDUuODUxLTE1LjM3MiA1Ljg1MS0yMS4yMjMgMHMtNS44NTEtMTUuMzcyIDAtMjEuMjIzIDE1LjM3Mi01Ljg1MSAyMS4yMjMgMCA1Ljg1MiAxNS4zNzEgMCAyMS4yMjN6IiBmaWxsPSIjZmY0MDVjIi8+PHBhdGggZD0ibTE2NC41OTEgMjAyLjM3Yy0xNy41NTQtMTcuNTU0LTQ2LjExNS0xNy41NTQtNjMuNjY5IDBzLTE3LjU1NCA0Ni4xMTUgMCA2My42NjkgNDYuMTE1IDE3LjU1NCA2My42NjkgMCAxNy41NTQtNDYuMTE2IDAtNjMuNjY5em0tMjEuMjIzIDQyLjQ0NmMtNS44NTEgNS44NTEtMTUuMzcyIDUuODUxLTIxLjIyMyAwcy01Ljg1MS0xNS4zNzIgMC0yMS4yMjMgMTUuMzcyLTUuODUxIDIxLjIyMyAwIDUuODUxIDE1LjM3MSAwIDIxLjIyM3oiIGZpbGw9IiNmZjcwMzgiLz48cGF0aCBkPSJtMjAzLjU1NCAzNDUuMDEzIDQ0Ljg0Mi0xMzQuNTI2LTQ3LjQzMyA0Ny40MzMtMjUuODY5IDc3LjYwNmMtMS44NTkgNS41NzUtLjI2MiAxMS40NjkgMy42MjkgMTUuMzYgMS41OTQgMS41OTQgMy41NzMgMi44NTIgNS44NTcgMy42MTMgNy44NiAyLjYyMiAxNi4zNTUtMS42MjcgMTguOTc0LTkuNDg2eiIgZmlsbD0iI2ZmNDA1YyIvPjxnPjxwYXRoIGQ9Im00NTQuNDg5IDQuMzkzYy01Ljg1Ny01Ljg1Ny0xNS4zNTUtNS44NTctMjEuMjEzIDBsLTg0Ljg1MiA4NC44NTMgMjEuMjEzIDIxLjIxMyA4NC44NTItODQuODUzYzUuODU5LTUuODU3IDUuODU5LTE1LjM1NiAwLTIxLjIxM3oiIGZpbGw9IiMwMDQyOWIiLz48cGF0aCBkPSJtNDU0LjQ4OSAyNS42MDZjNS44NTgtNS44NTcgNS44NTktMTUuMzU1IDAtMjEuMjEzbC05NS40NTkgOTUuNDU5IDEwLjYwNyAxMC42MDd6IiBmaWxsPSIjMDAyNjU5Ii8+PC9nPjxnPjxwYXRoIGQ9Im0zODAuMjQ0IDEzNi4wNjZjLTMuODM5IDAtNy42NzgtMS40NjUtMTAuNjA2LTQuMzk0bC00Mi40MjctNDIuNDI3Yy01Ljg1OC01Ljg1Ny01Ljg1OC0xNS4zNTUgMC0yMS4yMTMgNS44NTctNS44NTcgMTUuMzU1LTUuODU3IDIxLjIxMyAwbDQyLjQyNyA0Mi40MjdjNS44NTggNS44NTcgNS44NTggMTUuMzU1IDAgMjEuMjEzLTIuOTI5IDIuOTI5LTYuNzY4IDQuMzk0LTEwLjYwNyA0LjM5NHoiIGZpbGw9IiNmZjg2NTkiLz48cGF0aCBkPSJtMzkwLjg1MSAxMTAuNDU5LTIxLjIxMy0yMS4yMTMtMjEuMjEzIDIxLjIxMyAyMS4yMTMgMjEuMjEzYzIuOTI5IDIuOTI5IDYuNzY4IDQuMzk0IDEwLjYwNiA0LjM5NCAzLjgzOSAwIDcuNjc4LTEuNDY1IDEwLjYwNi00LjM5NCA1Ljg1OS01Ljg1NyA1Ljg1OS0xNS4zNTUuMDAxLTIxLjIxM3oiIGZpbGw9IiNmZjYzMjYiLz48L2c+PC9nPjwvc3ZnPg==" />
                                <p>Mendapatkan benefit <b>bebas biaya admin setiap bulannya</b> untuk provider yang disubscribe menjadi User Host</p>
                            </div>
                            <div class="info__benefits-card">
                                <img alt="Image not found" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTUxMiAxMzV2NjBsLTc2IDc1aC0zNjBsLTc2LTc1di02MGMwLTQuMDIgMS42MS03Ljg3IDQuNDgtMTAuNjlsNjEtNjBjMi44MS0yLjc2IDYuNTgtNC4zMSAxMC41Mi00LjMxaDM2MGMzLjk0IDAgNy43MSAxLjU1IDEwLjUyIDQuMzFsNjEgNjBjMi44NyAyLjgyIDQuNDggNi42NyA0LjQ4IDEwLjY5eiIgZmlsbD0iIzU3NWY2NCIvPjxwYXRoIGQ9Im01MTIgMTM1djYwbC03NiA3NWgtMTgwdi0yMTBoMTgwYzMuOTQgMCA3LjcxIDEuNTUgMTAuNTIgNC4zMWw2MSA2MGMyLjg3IDIuODIgNC40OCA2LjY3IDQuNDggMTAuNjl6IiBmaWxsPSIjNDc0ZjU0Ii8+PHBhdGggZD0ibTM5NC4xOSAxNTIuODktMTEyLjcyIDExMi43MmMtMi45MyAyLjkzLTYuNzcgNC4zOS0xMC42MSA0LjM5aC0yMjIuODZsLS4wMy00Ni42N2MtNS44Ni01Ljg2LTUuODYtMTUuMzUgMC0yMS4yMWwxOTcuNzMtMTk3LjczYzIuNzQtMi43NCA2LjQ0LTQuMzEgMTAuMy00LjM4LjEtLjAxLjItLjAxLjMtLjAxIDMuOTggMCA3LjggMS41OCAxMC42MSA0LjM5bDEyNy4yOCAxMjcuMjhjNS44NiA1Ljg2IDUuODYgMTUuMzYgMCAyMS4yMnoiIGZpbGw9IiNmZmRhMmQiLz48cGF0aCBkPSJtMzk0LjE5IDE1Mi44OS0xMTIuNzIgMTEyLjcyYy0yLjkzIDIuOTMtNi43NyA0LjM5LTEwLjYxIDQuMzloLTE0Ljg2di0yNjkuOTljLjEtLjAxLjItLjAxLjMtLjAxIDMuOTggMCA3LjggMS41OCAxMC42MSA0LjM5bDEyNy4yOCAxMjcuMjhjNS44NiA1Ljg2IDUuODYgMTUuMzYgMCAyMS4yMnoiIGZpbGw9IiNmZGJmMDAiLz48Zz48cGF0aCBkPSJtMjY2LjkxIDExMC40Ni0xMC45MSAxMC45MS0zMS41MiAzMS41MmMtNS44NSA1Ljg1LTE1LjM1IDUuODUtMjEuMjEgMC01Ljg2LTUuODYtNS44Ni0xNS4zNiAwLTIxLjIybDQyLjQzLTQyLjQyYzIuODQtMi44NSA2LjU2LTQuMzEgMTAuMy00LjM4IDMuOTQtLjA5IDcuOSAxLjM3IDEwLjkxIDQuMzggNS44NiA1Ljg1IDUuODYgMTUuMzUgMCAyMS4yMXoiIGZpbGw9IiM1NzVmNjQiLz48L2c+PHBhdGggZD0ibTI2Ni45MSAxMTAuNDYtMTAuOTEgMTAuOTF2LTM2LjVjMy45NC0uMDkgNy45IDEuMzcgMTAuOTEgNC4zOCA1Ljg2IDUuODUgNS44NiAxNS4zNSAwIDIxLjIxeiIgZmlsbD0iIzQ3NGY1NCIvPjxnPjxwYXRoIGQ9Im0zMDkuMzQgMTUyLjg5LTUzLjM0IDUzLjMzLTkuMzkgOS4zOWMtNS44NiA1Ljg2LTE1LjM1IDUuODYtMjEuMjEgMHMtNS44Ni0xNS4zNSAwLTIxLjIxbDMwLjYtMzAuNiAzMi4xMi0zMi4xM2M1Ljg2LTUuODYgMTUuMzYtNS44NiAyMS4yMiAwIDUuODUgNS44NiA1Ljg1IDE1LjM2IDAgMjEuMjJ6IiBmaWxsPSIjNTc1ZjY0Ii8+PC9nPjxwYXRoIGQ9Im0zMDkuMzQgMTUyLjg5LTUzLjM0IDUzLjMzdi00Mi40MmwzMi4xMi0zMi4xM2M1Ljg2LTUuODYgMTUuMzYtNS44NiAyMS4yMiAwIDUuODUgNS44NiA1Ljg1IDE1LjM2IDAgMjEuMjJ6IiBmaWxsPSIjNDc0ZjU0Ii8+PHBhdGggZD0ibTUxMiAxOTV2MzAyYzAgOC4yOC02LjcyIDE1LTE1IDE1aC00ODJjLTguMjggMC0xNS02LjcyLTE1LTE1di0zMDJoMTVjMzMuMTQgMCA2MSAyNi44NiA2MSA2MGgzNjBjMC0zMy4xNCAyNy44Ni02MCA2MS02MHoiIGZpbGw9IiNmZjdkNDciLz48cGF0aCBkPSJtNTEyIDE5NXYzMDJjMCA4LjI4LTYuNzIgMTUtMTUgMTVoLTI0MXYtMjU3aDE4MGMwLTMzLjE0IDI3Ljg2LTYwIDYxLTYweiIgZmlsbD0iI2ZmNDA1YyIvPjxnPjxjaXJjbGUgY3g9IjIyNiIgY3k9IjM0NyIgZmlsbD0iI2ZkZjRmNSIgcj0iMTUiLz48L2c+PGc+PGNpcmNsZSBjeD0iMjg2IiBjeT0iNDA3IiBmaWxsPSIjZWZlMmRkIiByPSIxNSIvPjwvZz48Zz48cGF0aCBkPSJtMjk2LjYxIDM1Ny42MS02MCA2MGMtNS44NiA1Ljg1LTE1LjM2IDUuODUtMjEuMjIgMC01Ljg1LTUuODYtNS44NS0xNS4zNiAwLTIxLjIybDQwLjYxLTQwLjYxIDE5LjM5LTE5LjM5YzUuODYtNS44NSAxNS4zNi01Ljg1IDIxLjIyIDAgNS44NSA1Ljg2IDUuODUgMTUuMzYgMCAyMS4yMnoiIGZpbGw9IiNmZGY0ZjUiLz48L2c+PHBhdGggZD0ibTI5Ni42MSAzNTcuNjEtNDAuNjEgNDAuNjF2LTQyLjQ0bDE5LjM5LTE5LjM5YzUuODYtNS44NSAxNS4zNi01Ljg1IDIxLjIyIDAgNS44NSA1Ljg2IDUuODUgMTUuMzYgMCAyMS4yMnoiIGZpbGw9IiNlZmUyZGQiLz48L2c+PC9zdmc+" />
                                <p>Berkesempatan mendapatkan undian <b>voucher e-Wallet (OVO, Gopay, Dana, LinkAja) Rp50.000</b> setiap bulannya</p>
                            </div>
                            <div class="info__benefits-card">
                                <img alt="Image not found" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQzFBNDA7IiBkPSJNMzc2LjkxOCwxNTAuMDAxaC0yNDJjLTguNDAxLDAtMTUsNi41OTktMTUsMTV2OTFjMCw4LjQwMSw2LjU5OSwxNSwxNSwxNWgyNDINCgljOC40MDEsMCwxNS02LjU5OSwxNS0xNXYtOTFDMzkxLjkxOCwxNTYuNiwzODUuMzE5LDE1MC4wMDEsMzc2LjkxOCwxNTAuMDAxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQTgzMjsiIGQ9Ik0yNzAuOTE4LDE1MC4wMDF2MTA2YzAsOC40MDEtNi41OTksMTUtMTUsMTVzLTE1LTYuNTk5LTE1LTE1di0xMDZIMjcwLjkxOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDNjAwMzQ7IiBkPSJNMzkxLjkxOCwxNjUuMDAxdjkxYzAsOC40MDEtNi41OTksMTUtMTUsMTVoLTEyMXYtMTIxaDEyMQ0KCUMzODUuMzE5LDE1MC4wMDEsMzkxLjkxOCwxNTYuNiwzOTEuOTE4LDE2NS4wMDF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkU5OTIzOyIgZD0iTTI3MC45MTgsMTUwLjAwMXYxMDZjMCw4LjQwMS02LjU5OSwxNS0xNSwxNXYtMTIxSDI3MC45MTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkVBODMyOyIgZD0iTTM2MC45MTgsNTkuNGMwLDE1LjkwMS02LjMwMSwzMS4xOTktMTcuNzAxLDQyLjI5OWMtMTEuMSwxMS40LTI2LjM5OCwxNy43MDEtNDIuMjk5LDE3LjcwMWgtNzUNCgljLTI0LjkwMSwwLTQ1LTIwLjA5OS00NS00NWMwLTE3LjQwMSwxMC4yMDEtMzMuMywyNS44LTQwLjhjMTIuNjAxLTYsMjcuMDAxLTUuNCwzOS45MDEsMC41OTljMi40MDEtNC43OTksNS4wOTktOS41OTgsOS4zLTEzLjc5OQ0KCWMwLjYwMS0xLjIwMSwxLjUtMi40MDEsMi43MDEtMy4zYzIyLjUtMjIuOCw2Mi4wOTgtMjIuOCw4NC41OTgsMEMzNTQuNjE3LDI4LjIwMSwzNjAuOTE4LDQzLjUsMzYwLjkxOCw1OS40eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFOTkyMzsiIGQ9Ik0zMDAuOTE4LDExOS40aC00NXYtOTljMC42MDEtMS4yMDEsMS41LTIuNDAxLDIuNzAxLTMuM2MyMi41LTIyLjgsNjIuMDk4LTIyLjgsODQuNTk4LDANCgljMTEuNCwxMS4xLDE3LjcwMSwyNi4zOTgsMTcuNzAxLDQyLjI5OXMtNi4zMDEsMzEuMTk5LTE3LjcwMSw0Mi4yOTlDMzMyLjExNywxMTMuMSwzMTYuODE5LDExOS40LDMwMC45MTgsMTE5LjR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkYzRTc1OyIgZD0iTTM3Ni45MTgsOTAuMDAxaC0yNDJjLTI0LjkwMSwwLTQ1LDIwLjA5OS00NSw0NXYzMGMwLDguNDAxLDYuNTk5LDE1LDE1LDE1aDMwMg0KCWM4LjQwMSwwLDE1LTYuNTk5LDE1LTE1di0zMEM0MjEuOTE4LDExMC4xLDQwMS44MTgsOTAuMDAxLDM3Ni45MTgsOTAuMDAxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZDMUE0MDsiIGQ9Ik00MjEuOTE4LDEzNS4wMDF2MzBjMCw4LjQwMS02LjU5OSwxNS0xNSwxNWgtMTUxdi05MGgxMjENCglDNDAxLjgxOCw5MC4wMDEsNDIxLjkxOCwxMTAuMSw0MjEuOTE4LDEzNS4wMDF6Ii8+DQo8cmVjdCB4PSIyNDAuOTIxIiB5PSI5MC4wMDEiIHN0eWxlPSJmaWxsOiNGRURCNDE7IiB3aWR0aD0iMzAiIGhlaWdodD0iOTAiLz4NCjxyZWN0IHg9IjI1NS45MjEiIHk9IjkwLjAwMSIgc3R5bGU9ImZpbGw6I0ZDQkYyOTsiIHdpZHRoPSIxNSIgaGVpZ2h0PSI5MCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFQTgzMjsiIGQ9Ik00MzYuOTE4LDMzMS4wMDFjOC40MDEsMCwxNSw2LjU5OSwxNSwxNXYxNTFjMCw4LjQwMS02LjU5OSwxNS0xNSwxNWgtMzYyYy04LjQwMSwwLTE1LTYuNTk5LTE1LTE1DQoJdi0xNTFjMC04LjQwMSw2LjU5OS0xNSwxNS0xNWwxNzMuMi05MGgxNS42MDFMNDM2LjkxOCwzMzEuMDAxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZFOTkyMzsiIGQ9Ik00MzYuOTE4LDMzMS4wMDFjOC40MDEsMCwxNSw2LjU5OSwxNSwxNXYxNTFjMCw4LjQwMS02LjU5OSwxNS0xNSwxNWgtMTgxdi0yNzFoNy44TDQzNi45MTgsMzMxLjAwMXoNCgkiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxQ0VFRDI7IiBkPSJNMTA0LjkxOCwzMC4wMDFoLTE1di0xNWMwLTguMjkxLTYuNzA5LTE1LTE1LTE1cy0xNSw2LjcwOS0xNSwxNXYxNWgtMTVjLTguMjkxLDAtMTUsNi43MDktMTUsMTUNCglzNi43MDksMTUsMTUsMTVoMTV2MTVjMCw4LjI5MSw2LjcwOSwxNSwxNSwxNXMxNS02LjcwOSwxNS0xNXYtMTVoMTVjOC4yOTEsMCwxNS02LjcwOSwxNS0xNVMxMTMuMjA5LDMwLjAwMSwxMDQuOTE4LDMwLjAwMXoiLz4NCjxnPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6IzE3Q0VCNDsiIGN4PSI0NjYuOTIxIiBjeT0iMTk1LjAwMSIgcj0iMTUiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMTdDRUI0OyIgZD0iTTQ2Ni45MTgsOTAuMDAxYy0yNC44MTQsMC00NS0yMC4xODYtNDUtNDVzMjAuMTg2LTQ1LDQ1LTQ1czQ1LDIwLjE4Niw0NSw0NQ0KCQlTNDkxLjczMiw5MC4wMDEsNDY2LjkxOCw5MC4wMDF6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkVEQjQxOyIgZD0iTTYyLjMxOCwyNDcuNmwtNTkuOCw5MGMtNi41NDgsMTAuNDc1LDAuNjExLDIzLjQwMSwxMi40LDIzLjQwMWgxNDguMg0KCWM0Ljc5OSwwLDEwLjYtMi40MDEsMTMuMjk5LTYuMzAxbDc5LjUwMS0xMTMuNjk5aC0xODFDNjkuODE4LDI0MS4wMDEsNjUuMzE4LDI0My40MDIsNjIuMzE4LDI0Ny42eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZDQkYyOTsiIGQ9Ik01MDkuNTE3LDMzNy42bC02MC05MGMtMi45OTktNC4xOTktNy41LTYuNTk5LTEyLjU5OS02LjU5OWgtMTgxTDMzNS40MTksMzU0LjcNCgljMi42OTksMy45LDcuNSw2LjMwMSwxMi4yOTksNi4zMDFoMTQ5LjJDNTA4LjcwNiwzNjEuMDAxLDUxNi4wNjUsMzQ4LjA3NSw1MDkuNTE3LDMzNy42eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                                <p>Berkesempatan mendapatkan <b>giveaway (smartwatch, smartphone, earphone wireless dan lainnya)</b> yang diadakan Seakun.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info faq">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-6 faq-title-container">
                        FAQ
                    </div>
                    <div class="col-md-8 col-lg-6">
                        <div id="accordion" class="accordion">
                            <!-- Start Accodion "Apa itu Host" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading1"
                                data-toggle="collapse"
                                data-target="#collapse1"
                                aria-expanded="false"
                                aria-controls="collapse1"
                            >
                                <h5>
                                    Apa itu User Host?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse1"
                                class="collapse accordion-body"
                                aria-labelledby="heading1"
                                data-parent="#accordion"
                            >
                                User Host adalah user yang berlangganan provider Entertainment via Seakun.id 
                                dan <b>user yang bertanggung-jawab melakukan payment ke provider Entertainment menggunakan kartu debit/kredit pribadi miliknya</b>.
                            </div>
                            <!-- End Accodion "Apa itu Host" -->

                            <!-- Start Accodion "Bagaimana cara daftar sebagai Host?" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading2"
                                data-toggle="collapse"
                                data-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                            >
                                <h5>
                                    Bagaimana cara daftar sebagai User Host?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse2"
                                class="collapse accordion-body"
                                aria-labelledby="heading2"
                                data-parent="#accordion"
                            >
                                Untuk menjadi Host kamu bisa mengikuti langkah-langkah sebagai berikut.
                                <ol class="mt-2">
                                    <li>Daftar sebagai User Host dengan memilih paket yang berlabel User Host di pilihan paket yang tersedia.</li>
                                    <li>Lakukan pembayaran sesuai dengan petunjuk pembayaran normal dan mengirimkan bukti pembayaran ke admin.</li>
                                    <li>Memberikan foto KTP ke admin Seakun.id.</li>
                                    <li>Admin akan menghubungi kamu dan memberikan akun provider Entertainment (Contoh: Akun Netflix) yang belum memiliki plan berlangganan.</li>
                                    <li>Kamu akan diminta untuk membayarkan terlebih dahulu biaya berlangganan plan paketnya, Contoh: Netflix premium dengan biaya sebesar Rp 186.000 menggunakan kartu debit/kredit yang kamu miliki.</li>
                                    <li>Segera lakukan konfirmasi ke admin jika proses pembayaran sudah berhasil dengan mengirim bukti pembayaran atau mutasi rekening yang menyatakan pembayaran berhasil.</li>
                                    <li>Kirimkan Nomor Rekening Bank kamu kepada admin untuk proses penggantian uang.</li>
                                    <li>Admin akan mengganti keseluruhan biaya kamu yang terpakai untuk berlangganan provider entertainment secepatnya (paling lama 4 jam) setelah bukti transfer dikirim.</li>
                                    <li>Admin akan mengirimkan Akun Netflix beserta Profile serta Pin kepada kamu lewat email dan whatsap. Registrasi User Host pun selesai.</li>
                                    <li>Untuk proses di bulan berikutnya akan memiliki langkah yang sama di mulai dari langkah nomor 5.</li>
                                </ol>
                            </div>
                            <!-- End Accodion "Bagaimana cara daftar sebagai Host?" -->

                            <!-- Start Accodion "Apa syarat menjadi User Host" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading3"
                                data-toggle="collapse"
                                data-target="#collapse3"
                                aria-expanded="false"
                                aria-controls="collapse3"
                            >
                                <h5>
                                    Apa syarat menjadi User Host?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse3"
                                class="collapse accordion-body"
                                aria-labelledby="heading3"
                                data-parent="#accordion"
                            >
                                Untuk menjadi User Host ada beberapa syarat yang harus dipenuhi yaitu sebagai berikut.
                                <ol class="mt-2">
                                    <li>Memiliki <b>kartu debit/kredit internasional</b> seperti BNI, Mandiri, Jenius dan kartu lain yang memiliki logo VISA dan Mastercard.</li>
                                    <li>Bersedia mendahulukan pembayaran ke provider entertainment yang terkait dengan uang pribadi (akan diganti Seakun.id paling lama 4 jam setelah menunjukkan bukti pembayaran).</li>
                                </ol>
                            </div>
                            <!-- Apa saja syarat menjadi User Host" -->

                             <!-- Start Accodion "Apakah menjadi User Host aman untuk data pribadi saya?" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading4"
                                data-toggle="collapse"
                                data-target="#collapse4"
                                aria-expanded="false"
                                aria-controls="collapse4"
                            >
                                <h5>
                                    Apakah menjadi User Host aman untuk data pribadi dan kartu debit/kredit saya?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse4"
                                class="collapse accordion-body"
                                aria-labelledby="heading4"
                                data-parent="#accordion"
                            >
                                Seakun.id berkomitmen penuh dalam menjaga data penggunanya. Seakun.id juga punya aturan terkait kerahasiaan data penggunanya termasuk data User Host. Untuk data kartu debit/kredit yang 
                                digunakan juga dipastikan aman karena proses payment dilakukan oleh kamu sendiri. Setelah proses payment selesai, tidak akan ada orang lain
                                yang bisa melihat informasi kartu debit/kredit milik kamu termasuk Seakun.id karena data kartu di sensor oleh provider terkait. 
                                Untuk detail sensor data kartu bisa dilihat sepeti gambar berikut.
                                <img class="img-info" src="/images/netflix-payment-info.png" alt="netflix-payment-info">
                            </div>
                            <!-- Apakah menjadi User Host aman untuk data pribadi saya?" -->

                            <!-- Start Accodion "Bagaimana jika saya yang telah terdaftar menjadi User Host ingin berhenti berlangganan?" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading5"
                                data-toggle="collapse"
                                data-target="#collapse5"
                                aria-expanded="false"
                                aria-controls="collapse5"
                            >
                                <h5>
                                    Bagaimana jika saya yang telah terdaftar menjadi User Host ingin berhenti berlangganan?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse5"
                                class="collapse accordion-body"
                                aria-labelledby="heading5"
                                data-parent="#accordion"
                            >
                                Bila kamu sebagai User Host ingin berhenti berlangganan harap hubungi admin paling lambat h-2 sebelum masa berlangganan selesai.
                            </div>
                            <!-- Bagaimana jika saya yang telah terdaftar menjadi User Host ingin berhenti berlangganan?" -->

                            <!-- Start Accodion "Bagaimana agar saya mengetahui proses undian voucher e-Wallet dan Giveaway yang diadakan Seakun.id?" -->
                            <div
                                class="accordion-header collapsed"
                                id="heading6"
                                data-toggle="collapse"
                                data-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapse6"
                            >
                                <h5>
                                    Bagaimana agar saya mengetahui event Undian Voucher e-Wallet dan Giveaway yang diadakan Seakun.id?
                                    <span class="icon-toggle"></span>
                                </h5>
                            </div>
                            <div
                                id="collapse6"
                                class="collapse accordion-body"
                                aria-labelledby="heading6"
                                data-parent="#accordion"
                            >
                                Follow instagram <a href="https://www.instagram.com/seakun.id/">@seakun.id</a> untuk mengetahui informasi event Undian Voucher e-Wallet dan Giveaway yang diadakan Seakun.id secara berkala.
                            </div>
                            <!-- Bagaimana agar saya mengetahui proses undian voucher e-Wallet dan Giveaway yang diadakan Seakun.id?" -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/mollecules/Header";
import Accordion from "~/components/atoms/Accordion";
import Title from "~/components/atoms/Title";
import Footer from "~/components/organisms/Footer"

export default {
    components: {
        Header,
        Accordion,
        Title,
        Footer
    },
};
</script>

<style lang="scss" scoped>
.info {
    padding: 100px 0px 40px !important;

    .faq-title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
        color: #e5e5e5;
        font-weight: 700;
    }

    &__benefits {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        &-card {
            width: 18rem;
            margin: 10px 6px;
            text-align: center;
            padding: 16px 24px;
            border: 1px solid #eeeeee;
            border-radius: 8px;
            box-shadow: 0px 0px 4px #dddddd;
            cursor: pointer;
            transition: transform 0.2s;
            &:hover {
                box-shadow: 0px 0px 16px #dddddd;
                transform: scale(1.05);
            }
            img {
                margin-top: 8px;
                max-width: 11rem;
                margin-bottom: 20px;
            }
            h5 {
                font-size: 18px;
            }
        }
    }

    .accordion {
        padding-top: 0.75rem;

        .accordion-header {
            position: relative;
            cursor: pointer;
            padding: 0.75rem 0;

            .icon-toggle {
                color: #86d0c1;

                &::before {
                    top: 1rem;
                    right: 0.5rem;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 15px;
                    height: 2px;
                    font-size: 1rem;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }

                &::after {
                    top: 1rem;
                    right: 0.5rem;
                    content: "";
                    position: absolute;
                    display: block;
                    width: 15px;
                    height: 2px;
                    font-size: 1rem;
                    -webkit-transition: all 0.4s;
                    -moz-transition: all 0.4s;
                    -o-transition: all 0.4s;
                    transition: all 0.4s;
                }
            }

            h5 {
                margin-bottom: 0;
                padding-right: 2rem;
                font-size: 1rem;

                .icon-toggle:before {
                    top: 1.5rem;
                }

                .icon-toggle:after {
                    top: 1.5rem;
                }
            }

            &[aria-expanded="false"] {
                h5 {
                    color: #666;
                    font-weight: 700;
                }

                .icon-toggle {
                    &::before {
                        background: #999;
                        transform: rotate(-180deg);
                    }

                    &::after {
                        background: #999;
                        transform: rotate(-90deg);
                    }
                }
            }

            &[aria-expanded="true"] {
                h5 {
                    color: #86d0c1;
                    font-weight: 700;
                }

                .icon-toggle {
                    &::before {
                        background: #86d0c1;
                        transform: rotate(0deg);
                    }

                    &::after {
                        background: #86d0c1;
                        transform: rotate(0deg);
                    }
                }
            }
        }

        .accordion-body {
            color: #999;
            font-size: 0.9rem;
        }
    }
    &.faq {
        padding-top: 50px !important;
        background-color: #f6f6f6;
    }
    .img-info {
        margin-top: 10px;
        width: 546px;
    }
}
@media (max-width: 800px) {
    .info {
        &__benefits {
            margin-top: 2rem;
            display: block;
            &-card {
                width: auto;
                margin: 25px 8px;
                p {
                    margin: 0px !important;
                }
            }
        }
        &.faq {
            padding-top: 20px !important;
        }
        .img-info {
            width: 100%;
        }
    }
}
</style>