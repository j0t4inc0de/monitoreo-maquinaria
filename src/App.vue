<template>
  <div class="font-display bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-gray-100">
    <div class="relative flex h-auto min-h-screen w-full flex-col">
      
      <header class="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap bg-gray-50/80 px-4 py-3 backdrop-blur-sm dark:bg-slate-900/80 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:text-white">Monitoreo de transporte</h2>
        </div>
        <div class="flex items-center gap-4">
          <button type="button" title="Cerrar Sesión" class="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
            <span class="material-symbols-outlined text-xl">logout</span>
          </button>
          <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-10 w-10" data-alt="User profile picture" :style="userProfileStyle"></div>
        </div>
      </header>

      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <div class="mx-auto max-w-7xl space-y-8">
          
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            <div class="flex flex-row items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-slate-800">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-300/40 text-primary-700 dark:bg-primary-800/30 dark:text-primary-400">
                <span class="material-symbols-outlined text-3xl">videocam</span>
              </div>
              <div>
                <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Videos Grabados</p>
                <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">1,482</p>
              </div>
            </div>
            
            <div class="flex flex-row items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-slate-800">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-300/40 text-primary-700 dark:bg-primary-800/30 dark:text-primary-400">
                <span class="material-symbols-outlined text-3xl">timeline</span>
              </div>
              <div>
                <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Distancia Recorrida</p>
                <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">8,940 km</p>
              </div>
            </div>
            
            <div class="flex flex-row items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-slate-800">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                <span class="material-symbols-outlined text-3xl">warning</span>
              </div>
              <div>
                <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Incidentes Detectados</p>
                <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">23</p>
              </div>
            </div>
            
            <div class="flex flex-row items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:bg-slate-800">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-300/40 text-primary-700 dark:bg-primary-800/30 dark:text-primary-400">
                <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <div>
                <p class="text-gray-600 dark:text-gray-300 text-base font-medium leading-normal">Maquinaria Activa</p>
                <p class="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">12 / 15</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Filtros de Búsqueda</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-slate-200 text-base font-medium leading-normal pb-2">Nombre de Maquinaria</p>
                <input class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400" placeholder="Seleccionar Maquinaria" value=""/>
              </label>
              
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-slate-200 text-base font-medium leading-normal pb-2">Turno</p>
                <input class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400" placeholder="Seleccionar Turno" value=""/>
              </label>
              
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-slate-200 text-base font-medium leading-normal pb-2">Nombre de un Trabajador</p>
                <input class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400" placeholder="Seleccionar Trabajador" value=""/>
              </label>
              
              <label class="flex flex-col flex-1">
                <p class="text-gray-700 dark:text-slate-200 text-base font-medium leading-normal pb-2">Rango de Fechas</p>
                <input class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400" placeholder="Seleccionar Fechas" value=""/>
              </label>
            </div>
            
            <div class="flex justify-end gap-3 pt-4">
              <button class="rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:bg-gray-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">
                Limpiar
              </button>
              <button class="flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                <span class="material-symbols-outlined text-base">filter_alt</span>
                <span>Aplicar Filtros</span>
              </button>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h2 class="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Videos Recientes: Excavadora CAT-320</h2>
              <p class="text-gray-500 dark:text-gray-400 mt-1">Modelo: Caterpillar 320D2 | Ubicación: Mina Central, Sector Norte</p>
            </div>
            
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div class="lg:col-span-2">
                <div class="grid grid-cols-1 gap-6 @container sm:grid-cols-2">
                  
                  <div class="group relative overflow-hidden rounded-lg border border-gray-200/80 transition-all duration-200 hover:shadow-sm dark:border-slate-700/60 dark:hover:border-slate-700">
                    <img alt="Video thumbnail of a construction site" class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh_Xw0Dy1MzKfUIS9MaO09HSnjRIh9-70KMWtytcKi9bsGgGwWv40Z1LZ02sKc8o7XM8ePnKnmVwmutcQxs4Lu3BCkhSkOyLFvmIzRToiMGp9lG4ZXHxXU64t5vJbNdlcK1OOj9fONGfKu4gYEDGYzUJWzSH7wmXddsXQSbbHG7vl-8r3NuPQibt_jwU-wg4eiFoRRDh1Mkf2WOEfzJC5yCz8wRb8OjpjkWeWABFLUtz9D9EuEaBrP75n4Cnuck_Yi0-t8V3nwWBM"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                      <p class="text-sm font-semibold">CAM-01-FRENTE</p>
                      <p class="text-xs text-gray-300">14/08/2023 - 14:35:12</p>
                    </div>
                    <div class="absolute right-2 top-2 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white">ALERTA</div>
                    <button type="button" title="Reproducir Video" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none">
                      <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                    </button>
                  </div>
                  <div class="group relative overflow-hidden rounded-lg border border-gray-200/80 transition-all duration-200 hover:shadow-sm dark:border-slate-700/60 dark:hover:border-slate-700">
                    <img alt="Video thumbnail of an excavator arm" class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnjZ1ZbMQLYYSO9slQyjJEwPpFswxIGh576HtNWxLU6_Ha-5aLI7F9Gpbz38KVQm-PWFoF-J3pGMFu1jM044gbcjV0lPARsErl_DK8_2iT5cvffQI3z_nBfPO1iCpQn_rtw2hyvfVpnuUpuVMiDv0Kk0tMy9g9MJqC_GStY8bHbnD6sLqg5bW0e9zBHSxlgA4SZj_X4mRxwb4fJo_tbPbdEBSuVvzAmuY5NasgrvECEpeDpstVI1xdrhnBZc0qr-4VOaKtUjrP_rA"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                      <p class="text-sm font-semibold">CAM-02-LATERAL</p>
                      <p class="text-xs text-gray-300">14/08/2023 - 14:32:05</p>
                    </div>
                    <button type="button" title="Reproducir Video" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none">
                      <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                    </button>
                  </div>
                  <div class="group relative overflow-hidden rounded-lg border border-gray-200/80 transition-all duration-200 hover:shadow-sm dark:border-slate-700/60 dark:hover:border-slate-700">
                    <img alt="Video thumbnail of machinery tracks" class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj-3fylXCTI4SOZ5lDGziDmg2coD_SBw4QnHpbfbRZa2F3Mh10XKvLWrCZhX6gOQ9_r-xhN_YrZxEsGbYL6e50YAdhsZuLTHQQcLN7FlFHJhC_swBjJK_APyDX26WEgDFunj6Qc-S6x8F7NCSpNYkX7SXOF3dH6M5kddYU-rBkpSS38AMdM00DZhRjpAPnCcJ_AWInv0KjntQ-5grzX32V2tphQ2FGg8DUJ1jzwRmf739f2r1UMj-Nj8r_LMBNvqC_sEvHpSisXso"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                      <p class="text-sm font-semibold">CAM-01-FRENTE</p>
                      <p class="text-xs text-gray-300">14/08/2023 - 14:28:44</p>
                    </div>
                    <button type="button" title="Reproducir Video" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none">
                      <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                    </button>
                  </div>
                  <div class="group relative overflow-hidden rounded-lg border border-gray-200/80 transition-all duration-200 hover:shadow-sm dark:border-slate-700/60 dark:hover:border-slate-700">
                    <img alt="Video thumbnail of a mining truck" class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOFn-c7-mfyBXAXbcuBWG4GufMJHZAx9Hnj0I4eAG1z4-YC58fHkFfnhKIBIsQ360fDyC2gz8wxnh314XVO9C7c6y7Ay4GUXNOI4GMPYWl7aPDYI0NlV-u3Zi76KegGAOiD1MwrjfkS3zkesPek6l4bwaFD9rnVzWZo6tjfTeB-R21Peed31PYSJ0Shv4UiRT5f1T4yzxZ9QI85GZbnGBYvv1L3uCqpBVxKQ6FWr7SwXA5Jta05y-7-6j_GEy1hRwiA0Bw2HrzdYo"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                      <p class="text-sm font-semibold">CAM-03-TRASERA</p>
                      <p class="text-xs text-gray-300">14/08/2023 - 14:25:19</p>
                    </div>
                    <button type="button" title="Reproducir Video" class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none">
                      <span class="material-symbols-outlined text-6xl text-white">play_circle</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="rounded-xl bg-white p-6 dark:bg-slate-800">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">Incidentes</h3>
                  
                  <button class="flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                    <span class="material-symbols-outlined text-sm">add_circle</span>
                    <span>Registro Manual</span>
                  </button>
                </div>
                
                <div class="space-y-4">
                  <div class="flex items-start gap-4 rounded-lg bg-red-500/10 p-3 dark:bg-red-500/20">
                    <span class="material-symbols-outlined text-red-500 mt-1">warning</span>
                    <div>
                      <p class="font-semibold text-red-700 dark:text-red-400">Proximidad Peligrosa</p>
                      <p class="text-sm text-gray-600 dark:text-gray-300">Vehículo no autorizado detectado cerca.</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">14/08/2023 - 14:35:10</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4 rounded-lg bg-orange-500/10 p-3 dark:bg-orange-500/20">
                    <span class="material-symbols-outlined text-orange-500 mt-1">speed</span>
                    <div>
                      <p class="font-semibold text-orange-700 dark:text-orange-400">Exceso de Velocidad</p>
                      <p class="text-sm text-gray-600 dark:text-gray-300">Velocidad superó el límite permitido.</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">14/08/2023 - 11:12:45</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4 rounded-lg bg-red-500/10 p-3 dark:bg-red-500/20">
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

  },
  data() {
    return {
      userImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOll0sdAKgrL04z0ZOkhpdPstLd2K7ThW8vr-c7K5tdupXqnnxMkN1Y2jnmRGWCJF1uAcrOqR9cgBxx6L_wI58rITOtP7NgS0olohVV4IRL7aJdXw5Ugs_Wz7jNb1Oad1Tt4vwAAz8yOuLTr5mpS8sX7V7WqYVxn0HpRCAiyz7mafErxalhaCw5jQrAZ5o1nFcoS0qLNZzRgGfXwJ2NaP2LYyh6aacwt_FrbU7U9S1DdmAlu336WEu_0HTBMyklSSXXwim4HU29cs'
      // Podrías manejar el estado de tus filtros aquí, ej:
      // filterMachineName: '',
      // filterShift: '',
    }
  },
  computed: {
    userProfileStyle() {
      return {
        backgroundImage: `url("${this.userImageUrl}")`
      }
    }
  }
}
</script>

<style scoped>

</style>