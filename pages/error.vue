<template>
  <div>
    <Header />
    <div class="container">
      <img
        alt="page not found"
        src="data:image/svg+xml;base64,PHN2ZyBpZD0iX3gzMV9feDJDXzUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDM2IDM2IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDM2IDM2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im04LjM3NyA0LjE2N2M2LjkxNyAwIDExLjY2Ny0zLjU4MyAxNS0zLjU4M3MxMC4zMzMgMS45MTYgMTAuMzMzIDE3LjI0OS05LjQxNyAxNy41ODMtMTMuMDgzIDE3LjU4M2MtMTcuMTY3LjAwMS0yNC41LTMxLjI0OS0xMi4yNS0zMS4yNDl6IiBmaWxsPSIjZWZlZmVmIi8+PC9nPjxnPjxwYXRoIGQ9Im0zMS41IDdjLS44MjcgMC0xLjUtLjY3My0xLjUtMS41cy42NzMtMS41IDEuNS0xLjUgMS41LjY3MyAxLjUgMS41LS42NzMgMS41LTEuNSAxLjV6bTAtMmMtLjI3NSAwLS41LjIyNC0uNS41cy4yMjUuNS41LjUuNS0uMjI0LjUtLjUtLjIyNS0uNS0uNS0uNXoiIGZpbGw9IiNhNGFmYzEiLz48L2c+PGc+PHBhdGggZD0ibTI3LjI1IDI4LjI1aC0xOC41Yy0xLjEwNSAwLTItLjg5NS0yLTJ2LTE1aDIyLjV2MTVjMCAxLjEwNS0uODk1IDItMiAyeiIgZmlsbD0iI2YzZjNmMSIvPjwvZz48Zz48cGF0aCBkPSJtMjkuMjUgMTEuMjVoLTIyLjV2LTEuNWMwLTEuMTA1Ljg5NS0yIDItMmgxOC41YzEuMTA1IDAgMiAuODk1IDIgMnoiIGZpbGw9IiMyZmRmODQiLz48L2c+PGc+PGNpcmNsZSBjeD0iMTgiIGN5PSIyMCIgZmlsbD0iIzJmZGY4NCIgcj0iNS4yNSIvPjwvZz48Zz48cGF0aCBkPSJtMTUgMjBjMC0yLjUxMiAxLjc2Ny00LjYwNyA0LjEyNS01LjEyMy0uMzYzLS4wNzktLjczOC0uMTI3LTEuMTI1LS4xMjctMi44OTkgMC01LjI1IDIuMzUtNS4yNSA1LjI1IDAgMi44OTkgMi4zNTEgNS4yNSA1LjI1IDUuMjUuMzg3IDAgLjc2Mi0uMDQ4IDEuMTI1LS4xMjgtMi4zNTgtLjUxNS00LjEyNS0yLjYxLTQuMTI1LTUuMTIyeiIgZmlsbD0iIzAwYjg3MSIvPjwvZz48Zz48cGF0aCBkPSJtOS4yNSAyNi4yNXYtMTVoLTIuNXYxNWMwIDEuMTA1Ljg5NSAyIDIgMmgyLjVjLTEuMTA1IDAtMi0uODk1LTItMnoiIGZpbGw9IiNkNWRiZTEiLz48L2c+PGc+PHBhdGggZD0ibTExIDcuNzVoLTIuMjVjLTEuMTA1IDAtMiAuODk1LTIgMnYxLjVoMi4yNXYtMS41YzAtMS4xMDUuODk1LTIgMi0yeiIgZmlsbD0iIzAwYjg3MSIvPjwvZz48Zz48cGF0aCBkPSJtMTggMjZjLTMuMzA5IDAtNi0yLjY5MS02LTZzMi42OTEtNiA2LTYgNiAyLjY5MSA2IDYtMi42OTEgNi02IDZ6bTAtMTAuNWMtMi40ODEgMC00LjUgMi4wMTktNC41IDQuNXMyLjAxOSA0LjUgNC41IDQuNSA0LjUtMi4wMTkgNC41LTQuNS0yLjAxOS00LjUtNC41LTQuNXoiLz48L2c+PGc+PHBhdGggZD0ibTE1LjQ4MiAxOS4yNWg1LjAzNXYxLjVoLTUuMDM1eiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTguODcgMTguNTg2KSIvPjwvZz48Zz48cGF0aCBkPSJtMTcuMjUgMTcuNDgyaDEuNXY1LjAzNWgtMS41eiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTguODcgMTguNTg2KSIvPjwvZz48Zz48cGF0aCBkPSJtMjcuMjUgMjloLTE4LjVjLTEuNTE3IDAtMi43NS0xLjIzMy0yLjc1LTIuNzV2LTE2LjVjMC0xLjUxNyAxLjIzMy0yLjc1IDIuNzUtMi43NWgxOC41YzEuNTE3IDAgMi43NSAxLjIzMyAyLjc1IDIuNzV2MTYuNWMwIDEuNTE3LTEuMjMzIDIuNzUtMi43NSAyLjc1em0tMTguNS0yMC41Yy0uNjg5IDAtMS4yNS41NjEtMS4yNSAxLjI1djE2LjVjMCAuNjg5LjU2MSAxLjI1IDEuMjUgMS4yNWgxOC41Yy42ODkgMCAxLjI1LS41NjEgMS4yNS0xLjI1di0xNi41YzAtLjY4OS0uNTYxLTEuMjUtMS4yNS0xLjI1eiIvPjwvZz48Zz48cGF0aCBkPSJtNi43NSAxMC41aDIyLjV2MS41aC0yMi41eiIvPjwvZz48Zz48cGF0aCBkPSJtMiAyNy41aDMydjEuNWgtMzJ6Ii8+PC9nPjwvc3ZnPg=="
      />
      <h4>Halaman tidak ditemukan...</h4>
      <p>Kembali ke <span @click="$router.push('/')">Halaman Utama</span></p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/mollecules/Header';
import Footer from '~/components/mollecules/Footer';

export default {
  layout: 'error',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 10rem;
  img {
    width: 20rem;
  }
  h4 {
    margin-top: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    span {
      cursor: pointer;
      color: dodgerblue;
    }
  }
}
@media (max-width: 800px) {
  .container {
    height: 35rem;
    padding: 16px;
    img {
      padding: 105px 0px 20px 0px;
      width: 210px;
    }
    h4 {
      margin-bottom: 0px;
    }
  }
}
</style>
