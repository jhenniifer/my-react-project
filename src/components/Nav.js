import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'

const Nav = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white fw-bolder" href="#">GPT-3</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5 gap-4">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">What is GPT?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white">Open AI</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white">Case studies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white">Library</a>
        </li>
      </ul>
      <div class="d-lg-flex ms-5 ms-lg-0 gap-4">
        <ul class="navbar-nav ms-lg-3 mb-5 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link text-white">Sign in</a>
        </li>
        </ul>
        <button class="btn px-4 text-white" type="submit">Sign up</button>
      </div>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Nav
