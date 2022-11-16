<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ model.id ? model.title : "Add a profile" }}
        </h1>
      </div>
    </template>
    <form @submit.prevent="saveProfile">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div
          class="
            px-4
            py-5
            bg-white
            space-y-6
            sm:p-6
            flex
            justify-between
            items-baseline
          "
        >
          <div>
            <label for="" class="block text-sm font-medium text-gray-700"
              >Front Image</label
            >
            <div class="mt-1 flex items-center">
              <img
                :src="model.image[0].front"
                :="model.title"
                v-if="model.image[0].front"
                class="w-64 h-48 object-cover"
              />
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[80%] h-[80%] text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  relative
                  overflow-hidden
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus-offset-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <input
                  type="file"
                  class="
                    absolute
                    left-0
                    top-0
                    right-0
                    bottom-0
                    opacity-0
                    cursor-pointer
                  "
                />
                Change
              </button>
            </div>
          </div>
          <div>
            <label for="" class="block text-sm font-medium text-gray-700"
              >Left Image</label
            >
            <div class="mt-1 flex items-center">
              <img
                :src="model.image[0].left"
                :="model.title"
                v-if="model.image[0].left"
                class="w-64 h-48 object-cover"
              />
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[80%] h-[80%] text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  relative
                  overflow-hidden
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus-offset-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <input
                  type="file"
                  class="
                    absolute
                    left-0
                    top-0
                    right-0
                    bottom-0
                    opacity-0
                    cursor-pointer
                  "
                />
                Change
              </button>
            </div>
          </div>
          <div>
            <label for="" class="block text-sm font-medium text-gray-700"
              >Right Image</label
            >
            <div class="mt-1 flex items-center">
              <img
                :src="model.image[0].right"
                :="model.title"
                v-if="model.image[0].right"
                class="w-64 h-48 object-cover"
              />
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[80%] h-[80%] text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  relative
                  overflow-hidden
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus-offset-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <input
                  type="file"
                  class="
                    absolute
                    left-0
                    top-0
                    right-0
                    bottom-0
                    opacity-0
                    cursor-pointer
                  "
                />
                Change
              </button>
            </div>
          </div>
          <div>
            <label for="" class="block text-sm font-medium text-gray-700"
              >Hind Image</label
            >
            <div class="mt-1 flex items-center">
              <img
                :src="model.image[0].hind"
                :="model.title"
                v-if="model.image[0].hind"
                class="w-64 h-48 object-cover"
              />
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-[80%] h-[80%] text-gray-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  relative
                  overflow-hidden
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus-offset-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <input
                  type="file"
                  class="
                    absolute
                    left-0
                    top-0
                    right-0
                    bottom-0
                    opacity-0
                    cursor-pointer
                  "
                />
                Change
              </button>
            </div>
          </div>
        </div>
        <div class="px-4 py-5 bg-white space-y-5 sm:p-6">
          <div>
            <label
              for="caseRef"
              class="block text-sm font-medium text-gray-700"
            >
              Case Ref
            </label>
            <input
              type="text"
              name="caseRef"
              id="caseRef"
              v-model="model.caseRef"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div>
            <label
              for="station"
              class="block text-sm font-medium text-gray-700"
            >
              Station
            </label>
            <input
              type="text"
              name="station"
              id="station"
              v-model="model.station"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div>
            <label
              for="offence"
              class="block text-sm font-medium text-gray-700"
            >
              Offence
            </label>
            <input
              type="text"
              name="offence"
              id="offence"
              v-model="model.offence"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>

          <div>
            <label
              for="briefsOnCase"
              class="block text-sm font-medium text-gray-700"
              >Briefs on Case</label
            >
            <div class="mt-1">
              <textarea
                id="briefsOnCase"
                name="briefsOnCase"
                rows="3"
                v-model="model.briefsOnCase"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  mt-1
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="col-span-6 sm:col-span-3 w-[33.3333%] mr-1">
              <label for="sex" class="block text-sm font-medium text-gray-700"
                >Sex</label
              >
              <select
                id="sex"
                name="sex"
                autocomplete="sex-name"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border border-gray-300
                  bg-white
                  py-2
                  px-3
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
                v-model="model.sex"
              >
                <option value="">-- select one --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="w-[33.333333%] mr-1">
              <label
                for="offence"
                class="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="text"
                name="offence"
                id="offence"
                v-model="model.age"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="col-span-6 sm:col-span-3 w-[33.3333%] mr-1">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >Nationality</label
              >
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border border-gray-300
                  bg-white
                  py-2
                  px-3
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
                v-model="model.nationality"
              >
                <option value="">-- select one --</option>
                <option value="afghan">Afghan</option>
                <option value="albanian">Albanian</option>
                <option value="algerian">Algerian</option>
                <option value="american">American</option>
                <option value="andorran">Andorran</option>
                <option value="angolan">Angolan</option>
                <option value="antiguans">Antiguans</option>
                <option value="argentinean">Argentinean</option>
                <option value="armenian">Armenian</option>
                <option value="australian">Australian</option>
                <option value="austrian">Austrian</option>
                <option value="azerbaijani">Azerbaijani</option>
                <option value="bahamian">Bahamian</option>
                <option value="bahraini">Bahraini</option>
                <option value="bangladeshi">Bangladeshi</option>
                <option value="barbadian">Barbadian</option>
                <option value="barbudans">Barbudans</option>
                <option value="batswana">Batswana</option>
                <option value="belarusian">Belarusian</option>
                <option value="belgian">Belgian</option>
                <option value="belizean">Belizean</option>
                <option value="beninese">Beninese</option>
                <option value="bhutanese">Bhutanese</option>
                <option value="bolivian">Bolivian</option>
                <option value="bosnian">Bosnian</option>
                <option value="brazilian">Brazilian</option>
                <option value="british">British</option>
                <option value="bruneian">Bruneian</option>
                <option value="bulgarian">Bulgarian</option>
                <option value="burkinabe">Burkinabe</option>
                <option value="burmese">Burmese</option>
                <option value="burundian">Burundian</option>
                <option value="cambodian">Cambodian</option>
                <option value="cameroonian">Cameroonian</option>
                <option value="canadian">Canadian</option>
                <option value="cape verdean">Cape Verdean</option>
                <option value="central african">Central African</option>
                <option value="chadian">Chadian</option>
                <option value="chilean">Chilean</option>
                <option value="chinese">Chinese</option>
                <option value="colombian">Colombian</option>
                <option value="comoran">Comoran</option>
                <option value="congolese">Congolese</option>
                <option value="costa rican">Costa Rican</option>
                <option value="croatian">Croatian</option>
                <option value="cuban">Cuban</option>
                <option value="cypriot">Cypriot</option>
                <option value="czech">Czech</option>
                <option value="danish">Danish</option>
                <option value="djibouti">Djibouti</option>
                <option value="dominican">Dominican</option>
                <option value="dutch">Dutch</option>
                <option value="east timorese">East Timorese</option>
                <option value="ecuadorean">Ecuadorean</option>
                <option value="egyptian">Egyptian</option>
                <option value="emirian">Emirian</option>
                <option value="equatorial guinean">Equatorial Guinean</option>
                <option value="eritrean">Eritrean</option>
                <option value="estonian">Estonian</option>
                <option value="ethiopian">Ethiopian</option>
                <option value="fijian">Fijian</option>
                <option value="filipino">Filipino</option>
                <option value="finnish">Finnish</option>
                <option value="french">French</option>
                <option value="gabonese">Gabonese</option>
                <option value="gambian">Gambian</option>
                <option value="georgian">Georgian</option>
                <option value="german">German</option>
                <option value="ghanaian">Ghanaian</option>
                <option value="greek">Greek</option>
                <option value="grenadian">Grenadian</option>
                <option value="guatemalan">Guatemalan</option>
                <option value="guinea-bissauan">Guinea-Bissauan</option>
                <option value="guinean">Guinean</option>
                <option value="guyanese">Guyanese</option>
                <option value="haitian">Haitian</option>
                <option value="herzegovinian">Herzegovinian</option>
                <option value="honduran">Honduran</option>
                <option value="hungarian">Hungarian</option>
                <option value="icelander">Icelander</option>
                <option value="indian">Indian</option>
                <option value="indonesian">Indonesian</option>
                <option value="iranian">Iranian</option>
                <option value="iraqi">Iraqi</option>
                <option value="irish">Irish</option>
                <option value="israeli">Israeli</option>
                <option value="italian">Italian</option>
                <option value="ivorian">Ivorian</option>
                <option value="jamaican">Jamaican</option>
                <option value="japanese">Japanese</option>
                <option value="jordanian">Jordanian</option>
                <option value="kazakhstani">Kazakhstani</option>
                <option value="kenyan">Kenyan</option>
                <option value="kittian and nevisian">
                  Kittian and Nevisian
                </option>
                <option value="kuwaiti">Kuwaiti</option>
                <option value="kyrgyz">Kyrgyz</option>
                <option value="laotian">Laotian</option>
                <option value="latvian">Latvian</option>
                <option value="lebanese">Lebanese</option>
                <option value="liberian">Liberian</option>
                <option value="libyan">Libyan</option>
                <option value="liechtensteiner">Liechtensteiner</option>
                <option value="lithuanian">Lithuanian</option>
                <option value="luxembourger">Luxembourger</option>
                <option value="macedonian">Macedonian</option>
                <option value="malagasy">Malagasy</option>
                <option value="malawian">Malawian</option>
                <option value="malaysian">Malaysian</option>
                <option value="maldivan">Maldivan</option>
                <option value="malian">Malian</option>
                <option value="maltese">Maltese</option>
                <option value="marshallese">Marshallese</option>
                <option value="mauritanian">Mauritanian</option>
                <option value="mauritian">Mauritian</option>
                <option value="mexican">Mexican</option>
                <option value="micronesian">Micronesian</option>
                <option value="moldovan">Moldovan</option>
                <option value="monacan">Monacan</option>
                <option value="mongolian">Mongolian</option>
                <option value="moroccan">Moroccan</option>
                <option value="mosotho">Mosotho</option>
                <option value="motswana">Motswana</option>
                <option value="mozambican">Mozambican</option>
                <option value="namibian">Namibian</option>
                <option value="nauruan">Nauruan</option>
                <option value="nepalese">Nepalese</option>
                <option value="new zealander">New Zealander</option>
                <option value="ni-vanuatu">Ni-Vanuatu</option>
                <option value="nicaraguan">Nicaraguan</option>
                <option value="nigerien">Nigerien</option>
                <option value="north korean">North Korean</option>
                <option value="northern irish">Northern Irish</option>
                <option value="norwegian">Norwegian</option>
                <option value="omani">Omani</option>
                <option value="pakistani">Pakistani</option>
                <option value="palauan">Palauan</option>
                <option value="panamanian">Panamanian</option>
                <option value="papua new guinean">Papua New Guinean</option>
                <option value="paraguayan">Paraguayan</option>
                <option value="peruvian">Peruvian</option>
                <option value="polish">Polish</option>
                <option value="portuguese">Portuguese</option>
                <option value="qatari">Qatari</option>
                <option value="romanian">Romanian</option>
                <option value="russian">Russian</option>
                <option value="rwandan">Rwandan</option>
                <option value="saint lucian">Saint Lucian</option>
                <option value="salvadoran">Salvadoran</option>
                <option value="samoan">Samoan</option>
                <option value="san marinese">San Marinese</option>
                <option value="sao tomean">Sao Tomean</option>
                <option value="saudi">Saudi</option>
                <option value="scottish">Scottish</option>
                <option value="senegalese">Senegalese</option>
                <option value="serbian">Serbian</option>
                <option value="seychellois">Seychellois</option>
                <option value="sierra leonean">Sierra Leonean</option>
                <option value="singaporean">Singaporean</option>
                <option value="slovakian">Slovakian</option>
                <option value="slovenian">Slovenian</option>
                <option value="solomon islander">Solomon Islander</option>
                <option value="somali">Somali</option>
                <option value="south african">South African</option>
                <option value="south korean">South Korean</option>
                <option value="spanish">Spanish</option>
                <option value="sri lankan">Sri Lankan</option>
                <option value="sudanese">Sudanese</option>
                <option value="surinamer">Surinamer</option>
                <option value="swazi">Swazi</option>
                <option value="swedish">Swedish</option>
                <option value="swiss">Swiss</option>
                <option value="syrian">Syrian</option>
                <option value="taiwanese">Taiwanese</option>
                <option value="tajik">Tajik</option>
                <option value="tanzanian">Tanzanian</option>
                <option value="thai">Thai</option>
                <option value="togolese">Togolese</option>
                <option value="tongan">Tongan</option>
                <option value="trinidadian or tobagonian">
                  Trinidadian or Tobagonian
                </option>
                <option value="tunisian">Tunisian</option>
                <option value="turkish">Turkish</option>
                <option value="tuvaluan">Tuvaluan</option>
                <option value="ugandan">Ugandan</option>
                <option value="ukrainian">Ukrainian</option>
                <option value="uruguayan">Uruguayan</option>
                <option value="uzbekistani">Uzbekistani</option>
                <option value="venezuelan">Venezuelan</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="welsh">Welsh</option>
                <option value="yemenite">Yemenite</option>
                <option value="zambian">Zambian</option>
                <option value="zimbabwean">Zimbabwean</option>
              </select>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[50%] mr-1">
              <label for="nin" class="block text-sm font-medium text-gray-700">
                NIN
              </label>
              <input
                type="text"
                name="nin"
                id="nin"
                v-model="model.nin"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[50%] mr-1">
              <label
                for="otherIdNo"
                class="block text-sm font-medium text-gray-700"
              >
                Other ID No.
              </label>
              <input
                type="text"
                name="otherIdNo"
                id="otherIdNo"
                v-model="model.otherIdNo"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[33.3333%] mr-1">
              <label
                for="tribe"
                class="block text-sm font-medium text-gray-700"
              >
                tribe
              </label>
              <input
                type="text"
                name="tribe"
                id="tribe"
                v-model="model.tribe"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[33.3333%] mr-1">
              <label
                for="religion"
                class="block text-sm font-medium text-gray-700"
              >
                Religion
              </label>
              <input
                type="text"
                name="religion"
                id="religion"
                v-model="model.religion"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="col-span-6 sm:col-span-3 w-[33.3333%] mr-1">
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >Marital Status</label
              >
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border border-gray-300
                  bg-white
                  py-2
                  px-3
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
                v-model="model.maritalStatus"
              >
                <option value="">-- select one --</option>
                <option value="male">Married</option>
                <option value="single">Single</option>
                <option value="widow">Widow</option>
                <option value="widower">Widower</option>
              </select>
            </div>
          </div>
          <div class="flex justify-content items-center">
            <div class="w-[50%] mr-1">
              <label
                for="placeOfBirth"
                class="block text-sm font-medium text-gray-700"
              >
                Place of Birth
              </label>
              <input
                type="text"
                name="placeOfBirth"
                id="placeOfBirth"
                v-model="model.placeOfBirth"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[50%] mr-1">
              <label
                for="presentAddress"
                class="block text-sm font-medium text-gray-700"
              >
                Present Address
              </label>
              <input
                type="text"
                name="presentAddress"
                id="presentAddress"
                v-model="model.presentAddress"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div>
            <label
              for="telephone"
              class="block text-sm font-medium text-gray-700"
            >
              telephone (comma ',' separated)
            </label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              v-model="model.telephone"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div>
            <label
              for="distinguishingFeatures"
              class="block text-sm font-medium text-gray-700"
            >
              Distinguishing Features
            </label>
            <input
              type="text"
              name="distinguishingFeatures"
              id="distinguishingFeatures"
              v-model="model.distinguishingFeature"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[50%]">
              <label
                for="height"
                class="block text-sm font-medium text-gray-700"
              >
                Height (cm)
              </label>
              <input
                type="text"
                name="height"
                id="height"
                v-model="model.height"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[50%] ml-1">
              <label
                for="bodyBuild"
                class="block text-sm font-medium text-gray-700"
              >
                Body Build
              </label>
              <input
                type="text"
                name="bodyBuild"
                id="bodyBuild"
                v-model="model.bodyBuild"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[50%]">
              <label
                for="eyeColor"
                class="block text-sm font-medium text-gray-700"
              >
                Eye Color
              </label>
              <input
                type="text"
                name="eyeColor"
                id="eyeColor"
                v-model="model.eyeColor"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[50%] ml-1">
              <label
                for="hairColor"
                class="block text-sm font-medium text-gray-700"
              >
                Hair Color
              </label>
              <input
                type="text"
                name="hairColor"
                id="hairColor"
                v-model="model.hairColor"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="col-span-6 sm:col-span-3 w-[50%] mr-1">
              <label
                for="levelOfEducation"
                class="block text-sm font-medium text-gray-700"
                >Level of Education</label
              >
              <select
                id="levelOfEducation"
                name="levelOfEducation"
                autocomplete="levelOfEducation"
                class="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border border-gray-300
                  bg-white
                  py-2
                  px-3
                  shadow-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-indigo-500
                  sm:text-sm
                "
                v-model="model.levelOfEducation"
              >
                <option value="">-- select one --</option>
                <option value="uneducated">Uneducated</option>
                <option value="PLE">PLE Certificate</option>
                <option value="UCE">O Level Certificate</option>
                <option value="UACE">A Level Certificate</option>
                <option value="National Certificate">
                  National Certificate
                </option>
                <option value="Diploma">Diploma Certificate</option>
                <option value="Bachelor degree">Bachelor's degree</option>
                <option value="Masters degree">Master's degree</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>
            <div class="w-[50%] ml-1">
              <label
                for="occupation"
                class="block text-sm font-medium text-gray-700"
              >
                Occupation
              </label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                v-model="model.occupation"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <!-- <div class="flex justify-start">
            <h1 class="text-2xl font-bold text-gray-900">Parents</h1>
          </div>
          <div class="flex justify-start">
            <h1 class="text-1xl font-bold text-gray-900">Father</h1>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[33.333%] ml-1">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="model"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[33.333%] ml-1">
              <label
                for="residence"
                class="block text-sm font-medium text-gray-700"
              >
                Residence
              </label>
              <input
                type="text"
                name="residence"
                id="residence"
                v-model="model.spouse"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[33.333%] ml-1">
              <label
                for="telephone"
                class="block text-sm font-medium text-gray-700"
              >
                Telephone
              </label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                v-model="model.spouse"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div class="flex justify-start">
            <h1 class="text-1xl font-bold text-gray-900">Mother</h1>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-[33.333%] ml-1">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                v-model="model.spouse"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[33.333%] ml-1">
              <label
                for="residence"
                class="block text-sm font-medium text-gray-700"
              >
                Residence
              </label>
              <input
                type="text"
                name="residence"
                id="residence"
                v-model="model.spouse"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
            <div class="w-[33.333%] ml-1">
              <label
                for="telephone"
                class="block text-sm font-medium text-gray-700"
              >
                Telephone
              </label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                v-model="model.spouse"
                class="
                  mt-1
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div> -->
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h3
              class="text-2xl font-semibold flex items-center justify-between"
            >
              Parent(s)
              <button
                type="button"
                @click="addParent()"
                class="
                  flex
                  items-center
                  text-sm
                  py-1
                  px-4
                  rounded-sm
                  text-white
                  bg-gray-600
                  hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add Parent
              </button>
            </h3>

            <div
              class="flex justify-between items-center relative"
              v-for="(item, index) in model.parents"
              :key="'parent_' + index"
            >
              <div class="absolute right-0 bottom-8" v-if="index !== 0">
                <button
                  type="button"
                  @click="removeParent(index)"
                  class="
                    h-8
                    w-8
                    flex
                    items-baseline
                    justify-center
                    rounded-full
                    border border-transparent
                    text-sm text-red-500
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div class="w-[10%] mr-1">
                <label for="relationship" class="block text-sm font-medium text-gray-700"
                  >relationship</label
                >
                <select
                  id="relationship"
                  name="relationship"
                  autocomplete="relationship-name"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border border-gray-300
                    bg-white
                    py-2
                    px-3
                    shadow-sm
                    focus:border-indigo-500
                    focus:outline-none
                    focus:ring-indigo-500
                    sm:text-sm
                  "
                  v-model="item.relationship"
                >
                  <option value="">-- select one --</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="guardian">Guardian</option>
                </select>
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.name"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Residence</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.residence"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Telephone</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.telephone"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h3
              class="text-2xl font-semibold flex items-center justify-between"
            >
              Spouse
              <button
                type="button"
                @click="addSpouse()"
                class="
                  flex
                  items-center
                  text-sm
                  py-1
                  px-4
                  rounded-sm
                  text-white
                  bg-gray-600
                  hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add Spouse
              </button>
            </h3>

            <div
              class="flex justify-between items-center relative"
              v-for="(item, index) in model.spouse"
              :key="'spouse_' + index"
            >
              <div class="absolute right-0 bottom-8" v-if="index !== 0">
                <button
                  type="button"
                  @click="removeSpouse(index)"
                  class="
                    h-8
                    w-8
                    flex
                    items-baseline
                    justify-center
                    rounded-full
                    border border-transparent
                    text-sm text-red-500
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.name"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Residence</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.residence"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Telephone</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.telephone"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h3
              class="text-2xl font-semibold flex items-center justify-between"
            >
              Associates
              <button
                type="button"
                @click="addAssociate()"
                class="
                  flex
                  items-center
                  text-sm
                  py-1
                  px-4
                  rounded-sm
                  text-white
                  bg-gray-600
                  hover:bg-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add Associate
              </button>
            </h3>

            <div
              class="flex justify-between items-center relative"
              v-for="(item, index) in model.associates"
              :key="'spouse_' + index"
            >
              <div class="absolute right-0 bottom-8" v-if="index !== 0">
                <button
                  type="button"
                  @click="removeAssociate(index)"
                  class="
                    h-8
                    w-8
                    flex
                    items-baseline
                    justify-center
                    rounded-full
                    border border-transparent
                    text-sm text-red-500
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.name"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Residence</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.residence"
                />
              </div>
              <div class="w-[30%] mr-1">
                <label class="block text-sm font-medium text-gray-700"
                  >Telephone</label
                >
                <input
                  type="text"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  v-model="item.telephone"
                />
              </div>
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  </PageComponent>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import PageComponent from "../components/PageComponent.vue";
import store from "../store";
import Spouse from "../components/Spouse.vue";

const model = ref({
  caseRef: "",
  station: "",
  offence: "",
  briefsOnCase: "",
  image: [{ front: "" }, { left: "" }, { right: "" }, { hind: "" }],
  name: "",
  sex: "",
  age: "",
  nationality: "",
  nin: "",
  otherIdNo: "",
  tribe: "",
  religion: "",
  maritalStatus: "",
  placeOfBirth: "",
  presentAddress: "",
  contacts: [],
  distinguishingFeature: "",
  height: "",
  bodyBuild: "",
  eyeColor: "",
  hairColor: "",
  levelOfEducation: "",
  occupation: "",
  parents: [{relationship: "", name: "", residence: "", contact: "" }],
  spouse: [{ name: "", residence: "", contact: "" }],
  associates: [{ name: "", residence: "", contact: "" }],
  languagesSpoken: "",
  travelHistory: "",
  previousCriminalRecord: "",
  telephone: "",
});

const route = useRoute();

if (route.params.id) {
  model.value = store.state.profiles.find(
    (s) => s.id === parseInt(route.params.id)
  );
}

const addSpouse = () => {
  model.value.spouse.push({ name: "", residence: "", contact: "" });
};

const removeSpouse = (index) => {
  model.value.spouse = model.value.spouse.filter(
    (item) => model.value.spouse.indexOf(item) !== index
  );
};
const addAssociate = () => {
  model.value.associates.push({ name: "", residence: "", contact: "" });
};

const removeAssociate = (index) => {
  model.value.associates = model.value.associates.filter(
    (item) => model.value.associates.indexOf(item) !== index
  );
};
const addParent = () => {
  model.value.parents.push({relationship: "", name: "", residence: "", contact: "" });
};

const removeParent = (index) => {
  model.value.parents = model.value.parents.filter(
    (item) => model.value.parents.indexOf(item) !== index
  );
};
</script>