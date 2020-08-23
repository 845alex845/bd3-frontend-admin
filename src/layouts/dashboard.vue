<template>
<div class="layout">
  <div class="layout__navbar">
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
    <a class="navbar-brand" href="#">Atención al cliente</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
        
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
    
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        
      </ul>
      
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
    
  </nav>

    <main>
      <div class="layout__content">
        <div class="container home">
d
        </div>
      </div>
    </main>
    <footer>
        <div class="layout__footer">

        </div>
    </footer>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .layout{
    &__navbar{
      width: 100%;
      // .dropdown-menu{
      //   top:90px;
      //   width: 100%;
      //   // background-color: #000;
      // }
    }
    &__content{
      height: 1000px;
      background-color: #E9EBEE;
      .home{
        background-color: #fff;
      }
    }
    &__footer{
      height: 250px;
      background-color: #212121;
    }
  }
</style>