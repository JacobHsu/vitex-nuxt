<template>
  <div>
    <section class="hero home">
      <div class="hero-body">
        <div class="container">
          <div class="is-size-1-desktop is-size-2-touch slogan-wrapper">
            <h1>slogan</h1>
          </div>
        </div>
      </div>
    </section>
    <Tutorial />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "assets/vars.scss";

.landing-dashbord-wrapper {
  background: #f6f8f9;
  padding-bottom: 30px;
  min-height: 500px;
}
.mine-wrapper {
  background: #f6f8f9;
  padding-bottom: 80px;
  @include touch {
    padding-top: 32px;
    padding-bottom: 30px;
  }
}
.market-wrapper {
  padding: 60px 0 88px 0;
  background-color: #131c34;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #111111;
  font-family: $font-family-light;
  font-weight: normal;
  margin-bottom: 3rem;
}
.home {
  position: relative;
  font-family: $font-family-title;
  .hero-body {
    padding: 0 10px 205px 10px;
  }
  @include touch {
    .hero-body {
      display: block;
      padding-bottom: 127px;
    }
  }

  .slogan-wrapper {
    margin-top: 8%;
    padding-bottom: 40px;
    text-align: center;
    h1 {
      font-size: 32px;
    }
    @include touch {
      max-width: unset;
      h1 {
        font-size: 28px;
      }
    }
    @include mobile {
      margin-top: 0;
      h1 {
        font-size: 28px;
      }
    }
  }
}

.btn {
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .start-btn {
    flex-shrink: 0;
    display: block;
    width: 170px;
    line-height: 53px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    background: $common-active-color;
    cursor: pointer;
    @include touch {
      height: 44px;
      line-height: 42px;
    }
  }
}

@media screen and (max-width: 321px) {
  .btn {
    justify-content: center;
  }
  .start-btn + .start-btn {
    margin-top: 16px;
  }
}
</style>
