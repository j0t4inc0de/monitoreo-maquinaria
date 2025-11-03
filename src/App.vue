<template>
  <div class="font-display bg-background-light dark:bg-background-dark">
    <div class="relative flex h-auto min-h-screen w-full flex-col">
      <header class="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
      <div class="flex items-center gap-4 text-gray-800 dark:text-white">
        <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">Monitoreo de transporte</h2>
      </div>
      <div class="flex items-center gap-4">
        <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span class="truncate">Cerrar Sesión</span>
        </button>
        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOll0sdAKgrL04z0ZOkhpdPstLd2K7ThW8vr-c7K5tdupXqnnxMkN1Y2jnmRGWCJF1uAcrOqR9cgBxx6L_wI58rITOtP7NgS0olohVV4IRL7aJdXw5Ugs_Wz7jNb1Oad1Tt4vwAAz8yOuLTr5mpS8sX7V7WqYVxn0HpRCAiyz7mafErxalhaCw5jQrAZ5o1nFcoS0qLNZzRgGfXwJ2NaP2LYyh6aacwt_FrbU7U9S1DdmAlu336WEu_0HTBMyklSSXXwim4HU29cs");'></div>
      </div>
      </header>
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <div class="mx-auto max-w-7xl space-y-8">
          <!-- Stats Section -->
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-1 flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67]">
              <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Videos Grabados</p>
              <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">1,482</p>
            </div>
            <div class="flex flex-1 flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67]">
              <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Distancia Recorrida</p>
              <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">8,940 km</p>
            </div>
            <div class="flex flex-1 flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67]">
              <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Incidentes Detectados</p>
              <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">23</p>
            </div>
            <div class="flex flex-1 flex-col gap-2 rounded-xl p-6 border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67]">
              <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Maquinaria Activa</p>
              <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">12 / 15</p>
            </div>
          </div>
          <!-- Filters Section -->
          <div class="space-y-4 rounded-xl border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67] p-6">
            <h2 class="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Filtros de Búsqueda</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Nombre de Maquinaria</p>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-gray-50 dark:bg-[#101922] focus:border-primary/50 h-12 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-3 text-base font-normal leading-normal" placeholder="Seleccionar Maquinaria" value=""/>
              </label>
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Turno</p>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-gray-50 dark:bg-[#101922] focus:border-primary/50 h-12 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-3 text-base font-normal leading-normal" placeholder="Seleccionar Turno" value=""/>
              </label>
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Nombre de un Trabajador</p>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-gray-50 dark:bg-[#101922] focus:border-primary/50 h-12 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-3 text-base font-normal leading-normal" placeholder="Seleccionar Trabajador" value=""/>
              </label>
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-white text-base font-medium leading-normal pb-2">Rango de Fechas</p>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#324d67] bg-gray-50 dark:bg-[#101922] focus:border-primary/50 h-12 placeholder:text-gray-400 dark:placeholder:text-[#92adc9] p-3 text-base font-normal leading-normal" placeholder="Seleccionar Fechas" value=""/>
              </label>
            </div>
          </div>
          <!-- Recent Videos Section -->
          <div class="space-y-6">
          <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Videos Recientes: Excavadora CAT-320</h2>
              <p class="text-gray-500 dark:text-gray-400 mt-1">Modelo: Caterpillar 320D2 | Ubicación: Mina Central, Sector Norte</p>
            </div>
          <button class="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90">
            <span class="material-symbols-outlined text-base">add_circle</span>
            <span>Registro Manual de Incidentes</span>
          </button>
          </div>
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <!-- Video Gallery -->
          <div class="lg:col-span-2">
            <div class="grid grid-cols-1 gap-6 @container sm:grid-cols-2">
              <div class="group relative overflow-hidden rounded-lg shadow-md">
              <img alt="Video thumbnail of a construction site" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh_Xw0Dy1MzKfUIS9MaO09HSnjRIh9-70KMWtytcKi9bsGgGwWv40Z1LZ02sKc8o7XM8ePnKnmVwmutcQxs4Lu3BCkhSkOyLFvmIzRToiMGp9lG4ZXHxXU64t5vJbNdlcK1OOj9fONGfKu4gYEDGYzUJWzSH7wmXddsXQSbbHG7vl-8r3NuPQibt_jwU-wg4eiFoRRDh1Mkf2WOEfzJC5yCz8wRb8OjpjkWeWABFLUtz9D9EuEaBrP75n4Cnuck_Yi0-t8V3nwWBM"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-4 text-white">
              <p class="text-sm font-semibold">CAM-01-FRENTE</p>
              <p class="text-xs text-gray-300">14/08/2023 - 14:35:12</p>
              </div>
              <div class="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">ALERTA</div>
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
              </div>
              </div>
              <div class="group relative overflow-hidden rounded-lg shadow-md">
              <img alt="Video thumbnail of an excavator arm" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnjZ1ZbMQLYYSO9slQyjJEwPpFswxIGh576HtNWxLU6_Ha-5aLI7F9Gpbz38KVQm-PWFoF-J3pGMFu1jM044gbcjV0lPARsErl_DK8_2iT5cvffQI3z_nBfPO1iCpQn_rtw2hyvfVpnuUpuVMiDv0Kk0tMy9g9MJqC_GStY8bHbnD6sLqg5bW0e9zBHSxlgA4SZj_X4mRxwb4fJo_tbPbdEBSuVvzAmuY5NasgrvECEpeDpstVI1xdrhnBZc0qr-4VOaKtUjrP_rA"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-4 text-white">
              <p class="text-sm font-semibold">CAM-02-LATERAL</p>
              <p class="text-xs text-gray-300">14/08/2023 - 14:32:05</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
              </div>
              </div>
              <div class="group relative overflow-hidden rounded-lg shadow-md">
                <img alt="Video thumbnail of machinery tracks" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj-3fylXCTI4SOZ5lDGziDmg2coD_SBw4QnHpbfbRZa2F3Mh10XKvLWrCZhX6gOQ9_r-xhN_YrZxEsGbYL6e50YAdhsZuLTHQQcLN7FlFHJhC_swBjJK_APyDX26WEgDFunj6Qc-S6x8F7NCSpNYkX7SXOF3dH6M5kddYU-rBkpSS38AMdM00DZhRjpAPnCcJ_AWInv0KjntQ-5grzX32V2tphQ2FGg8DUJ1jzwRmf739f2r1UMj-Nj8r_LMBNvqC_sEvHpSisXso"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4 text-white">
                  <p class="text-sm font-semibold">CAM-01-FRENTE</p>
                  <p class="text-xs text-gray-300">14/08/2023 - 14:28:44</p>
                </div>
                <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
              <div class="group relative overflow-hidden rounded-lg shadow-md">
                <img alt="Video thumbnail of a mining truck" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOFn-c7-mfyBXAXbcuBWG4GufMJHZAx9Hnj0I4eAG1z4-YC58fHkFfnhKIBIsQ360fDyC2gz8wxnh314XVO9C7c6y7Ay4GUXNOI4GMPYWl7aPDYI0NlV-u3Zi76KegGAOiD1MwrjfkS3zkesPek6l4bwaFD9rnVzWZo6tjfTeB-R21Peed31PYSJ0Shv4UiRT5f1T4yzxZ9QI85GZbnGBYvv1L3uCqpBVxKQ6FWr7SwXA5Jta05y-7-6j_GEy1hRwiA0Bw2HrzdYo"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-4 text-white">
                    <p class="text-sm font-semibold">CAM-03-TRASERA</p>
                    <p class="text-xs text-gray-300">14/08/2023 - 14:25:19</p>
                  </div>
                <div class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Incidents Panel -->
          <div class="rounded-xl border bg-white dark:bg-[#192633] border-gray-200 dark:border-[#324d67] p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Incidentes</h3>
            <div class="space-y-4">
            <div class="flex items-start gap-4 rounded-lg bg-red-500/10 dark:bg-red-500/20 p-3">
            <span class="material-symbols-outlined text-red-500 mt-1">warning</span>
              <div>
                <p class="font-semibold text-red-700 dark:text-red-400">Proximidad Peligrosa</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Vehículo no autorizado detectado cerca.</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">14/08/2023 - 14:35:10</p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 p-3">
              <span class="material-symbols-outlined text-orange-500 mt-1">speed</span>
              <div>
                <p class="font-semibold text-orange-700 dark:text-orange-400">Exceso de Velocidad</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Velocidad superó el límite permitido.</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">14/08/2023 - 11:12:45</p>
              </div>
            </div>
            <div class="flex items-start gap-4 rounded-lg bg-red-500/10 dark:bg-red-500/20 p-3">
              <span class="material-symbols-outlined text-red-500 mt-1">error</span>
              <div>
                <p class="font-semibold text-red-700 dark:text-red-400">Parada Inesperada</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Detención no programada en zona activa.</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">13/08/2023 - 16:45:30</p>
              </div>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style scoped>
  .material-symbols-outlined {
      font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
  }
</style>
