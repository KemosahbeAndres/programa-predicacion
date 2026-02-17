<template>
  <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 240px; min-height: 100vh;">
      <a class="navbar-brand text-white mb-3 fs-5 fw-bold text-decoration-none">
        📋 Predicación
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto gap-1">
        <li class="nav-item">
          <RouterLink to="/programas" class="nav-link text-white" active-class="active">
            🏠 Programas
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/territorios" class="nav-link text-white" active-class="active">
            🗺️ Territorios
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/capitanes" class="nav-link text-white" active-class="active">
            👤 Capitanes
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/eventos" class="nav-link text-white" active-class="active">
            📅 Eventos
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/ajustes" class="nav-link text-white" active-class="active">
            ⚙️ Ajustes
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Contenido principal -->
    <div class="flex-grow-1 p-4 bg-light" style="min-height: 100vh;">
      <RouterView />
    </div>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.sidebar .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar .nav-link.active {
  background-color: #0d6efd;
}
</style>