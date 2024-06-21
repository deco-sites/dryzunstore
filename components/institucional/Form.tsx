import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

export default function Form() {
  const loading = useSignal(false);
  const success = useSignal(false);
  const accept = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const title =
        (e.currentTarget.elements.namedItem("title") as RadioNodeList)?.value;
      const name = (e.currentTarget.elements.namedItem("name") as RadioNodeList)
        ?.value;
      const lastname =
        (e.currentTarget.elements.namedItem("lastname") as RadioNodeList)
          ?.value;
      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;
      const phonecode =
        (e.currentTarget.elements.namedItem("phonecode") as RadioNodeList)
          ?.value;
      const phone =
        (e.currentTarget.elements.namedItem("phone") as RadioNodeList)?.value;
      const city = (e.currentTarget.elements.namedItem("city") as RadioNodeList)
        ?.value;
      const address =
        (e.currentTarget.elements.namedItem("address") as RadioNodeList)?.value;
      const message =
        (e.currentTarget.elements.namedItem("message") as RadioNodeList)?.value;
      const terms =
        (e.currentTarget.elements.namedItem("accept") as RadioNodeList)?.value;

      await fetch("/api/dataentities/CR/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          email,
          name,
          phone,
          lastname,
          message,
          phonecode,
          city,
          address,
          terms,
        }),
      }).then(() => {
        success.value = true;
        e.currentTarget?.elements?.reset();
      });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="max-w-[700px] w-full mx-auto my-0 pt-[60px] md:pt-[90px] max-md:px-[7%]">
      <h1 class="headline50 text-[#452c1e] mb-2">Contato</h1>
      <p class="body20-ligth text-[#212121]">
        Por favor, indique o meio de contato de sua preferência. Nós o
        responderemos o mais rápido possível.
      </p>
      <form
        class="w-full flex flex-wrap justify-between mt-10"
        onSubmit={handleSubmit}
      >
        <div class="w-full mb-8 flex justify-between flex-wrap">
          <div class="w-full md:w-[14%] max-md:mb-8">
            <label class="legend16-ligth text-[#212121]">
              Título
            </label>
            <select
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              name="title"
              id="title"
            >
              <option aria-label="" value="">Título</option>
              <option value="Sr.">Sr.</option>
              <option value="Sra.">Sra.</option>
              <option value="Dr.">Dr.</option>
              <option value="Miss">Miss</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>
          <div class="w-full md:w-[38%] max-md:mb-8">
            <label class="legend16-ligth text-[#212121]">
              *Nome
            </label>
            <input
              name="name"
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
              required
            />
          </div>
          <div class="w-full md:w-[40%]">
            <label class="legend16-ligth text-[#212121]">
              *Sobrenome
            </label>
            <input
              name="lastname"
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
              required
            />
          </div>
        </div>

        <div class="w-full mb-8 flex justify-between flex-wrap">
          <div class="w-full md:w-[30%] max-md:mb-8">
            <label class="legend16-ligth text-[#212121]">
              *E-mail
            </label>
            <input
              name="email"
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
              required
            />
          </div>

          <div class="w-[20%] md:w-[14%] max-md:mb-8">
            <label class="fixed14-ligth text-[#212121]">
              Código
            </label>

            <select
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              name="phonecode"
              id="phonecode"
            >
              <option value="93" data-name="Afghanistan (‫افغانستان‬‎)">
                93
              </option>
              <option value="355" data-name="Albania (Shqipëri)">
                Albania (Shqipëri) 355
              </option>
              <option value="213" data-name="Algeria (‫الجزائر‬‎)">
                Algeria (‫الجزائر‬‎) 213
              </option>
              <option value="1684" data-name="American Samoa">
                American Samoa 1684
              </option>
              <option value="376" data-name="Andorra">Andorra 376</option>
              <option value="244" data-name="Angola">Angola 244</option>
              <option value="1264" data-name="Anguilla">Anguilla 1264</option>
              <option value="1268" data-name="Antigua and Barbuda">
                Antigua and Barbuda 1268
              </option>
              <option value="54" data-name="Argentina">Argentina 54</option>
              <option value="374" data-name="Armenia (Հայաստան)">
                Armenia (Հայաստան) 374
              </option>
              <option value="297" data-name="Aruba">Aruba 297</option>
              <option value="61" data-name="Australia">Australia 61</option>
              <option value="43" data-name="Austria (Österreich)">
                Austria (Österreich) 43
              </option>
              <option value="994" data-name="Azerbaijan (Azərbaycan)">
                Azerbaijan (Azərbaycan) 994
              </option>
              <option value="1242" data-name="Bahamas">Bahamas 1242</option>
              <option value="973" data-name="Bahrain (‫البحرين‬‎)">
                Bahrain (‫البحرين‬‎) 973
              </option>
              <option value="880" data-name="Bangladesh (বাংলাদেশ)">
                Bangladesh (বাংলাদেশ) 880
              </option>
              <option value="1246" data-name="Barbados">Barbados 1246</option>
              <option value="375" data-name="Belarus (Беларусь)">
                Belarus (Беларусь) 375
              </option>
              <option value="32" data-name="Belgium (België)">
                Belgium (België) 32
              </option>
              <option value="501" data-name="Belize">Belize 501</option>
              <option value="229" data-name="Benin (Bénin)">
                Benin (Bénin) 229
              </option>
              <option value="1441" data-name="Bermuda">Bermuda 1441</option>
              <option value="975" data-name="Bhutan (འབྲུག)">
                Bhutan (འབྲུག) 975
              </option>
              <option value="591" data-name="Bolivia">Bolivia 591</option>
              <option
                value="387"
                data-name="Bosnia and Herzegovina (Босна и Херцеговина)"
              >
                Bosnia and Herzegovina (Босна и Херцеговина) 387
              </option>
              <option value="267" data-name="Botswana">Botswana 267</option>
              <option value="55" data-name="Brazil (Brasil)" selected>
                55 Brasil
              </option>
              <option value="246" data-name="British Indian Ocean Territory">
                British Indian Ocean Territory 246
              </option>
              <option value="1284" data-name="British Virgin Islands">
                British Virgin Islands 1284
              </option>
              <option value="673" data-name="Brunei">Brunei 673</option>
              <option value="359" data-name="Bulgaria (България)">
                Bulgaria (България) 359
              </option>
              <option value="226" data-name="Burkina Faso">
                Burkina Faso 226
              </option>
              <option value="257" data-name="Burundi (Uburundi)">
                Burundi (Uburundi) 257
              </option>
              <option value="855" data-name="Cambodia (កម្ពុជា)">
                Cambodia (កម្ពុជា) 855
              </option>
              <option value="237" data-name="Cameroon (Cameroun)">
                Cameroon (Cameroun) 237
              </option>
              <option value="1" data-name="Canada">Canada 1</option>
              <option value="238" data-name="Cape Verde (Kabu Verdi)">
                Cape Verde (Kabu Verdi) 238
              </option>
              <option value="599" data-name="Caribbean Netherlands">
                Caribbean Netherlands 599
              </option>
              <option value="1345" data-name="Cayman Islands">
                Cayman Islands 1345
              </option>
              <option
                value="236"
                data-name="Central African Republic (République centrafricaine)"
              >
                Central African Republic (République centrafricaine) 236
              </option>
              <option value="235" data-name="Chad (Tchad)">
                Chad (Tchad) 235
              </option>
              <option value="56" data-name="Chile">Chile 56</option>
              <option value="86" data-name="China (中国)">
                China (中国) 86
              </option>
              <option value="61" data-name="Christmas Island">
                Christmas Island 61
              </option>
              <option value="61" data-name="Cocos (Keeling) Islands">
                Cocos (Keeling) Islands 61
              </option>
              <option value="57" data-name="Colombia">Colombia 57</option>
              <option value="269" data-name="Comoros (‫جزر القمر‬‎)">
                Comoros (‫جزر القمر‬‎) 269
              </option>
              <option
                value="243"
                data-name="Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)"
              >
                Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) 243
              </option>
              <option
                value="242"
                data-name="Congo (Republic) (Congo-Brazzaville)"
              >
                Congo (Republic) (Congo-Brazzaville) 242
              </option>
              <option value="682" data-name="Cook Islands">
                Cook Islands 682
              </option>
              <option value="506" data-name="Costa Rica">Costa Rica 506</option>
              <option value="225" data-name="Côte d’Ivoire">
                Côte d’Ivoire 225
              </option>
              <option value="385" data-name="Croatia (Hrvatska)">
                Croatia (Hrvatska) 385
              </option>
              <option value="53" data-name="Cuba">Cuba 53</option>
              <option value="599" data-name="Curaçao">Curaçao 599</option>
              <option value="357" data-name="Cyprus (Κύπρος)">
                Cyprus (Κύπρος) 357
              </option>
              <option value="420" data-name="Czech Republic (Česká republika)">
                Czech Republic (Česká republika) 420
              </option>
              <option value="45" data-name="Denmark (Danmark)">
                Denmark (Danmark) 45
              </option>
              <option value="253" data-name="Djibouti">Djibouti 253</option>
              <option value="1767" data-name="Dominica">Dominica 1767</option>
              <option
                value="1"
                data-name="Dominican Republic (República Dominicana)"
              >
                Dominican Republic (República Dominicana) 1
              </option>
              <option value="593" data-name="Ecuador">Ecuador 593</option>
              <option value="20" data-name="Egypt (‫مصر‬‎)">Egypt (‫مصر‬‎) 20</option>
              <option value="503" data-name="El Salvador">
                El Salvador 503
              </option>
              <option
                value="240"
                data-name="Equatorial Guinea (Guinea Ecuatorial)"
              >
                Equatorial Guinea (Guinea Ecuatorial) 240
              </option>
              <option value="291" data-name="Eritrea">Eritrea 291</option>
              <option value="372" data-name="Estonia (Eesti)">
                Estonia (Eesti) 372
              </option>
              <option value="251" data-name="Ethiopia">Ethiopia 251</option>
              <option value="500" data-name="Falkland Islands (Islas Malvinas)">
                Falkland Islands (Islas Malvinas) 500
              </option>
              <option value="298" data-name="Faroe Islands (Føroyar)">
                Faroe Islands (Føroyar) 298
              </option>
              <option value="679" data-name="Fiji">Fiji 679</option>
              <option value="358" data-name="Finland (Suomi)">
                Finland (Suomi) 358
              </option>
              <option value="33" data-name="France">France 33</option>
              <option value="594" data-name="French Guiana (Guyane française)">
                French Guiana (Guyane française) 594
              </option>
              <option
                value="689"
                data-name="French Polynesia (Polynésie française)"
              >
                French Polynesia (Polynésie française) 689
              </option>
              <option value="241" data-name="Gabon">Gabon 241</option>
              <option value="220" data-name="Gambia">Gambia 220</option>
              <option value="995" data-name="Georgia (საქართველო)">
                Georgia (საქართველო) 995
              </option>
              <option value="49" data-name="Germany (Deutschland)">
                Germany (Deutschland) 49
              </option>
              <option value="233" data-name="Ghana (Gaana)">
                Ghana (Gaana) 233
              </option>
              <option value="350" data-name="Gibraltar">Gibraltar 350</option>
              <option value="30" data-name="Greece (Ελλάδα)">
                Greece (Ελλάδα) 30
              </option>
              <option value="299" data-name="Greenland (Kalaallit Nunaat)">
                Greenland (Kalaallit Nunaat) 299
              </option>
              <option value="1473" data-name="Grenada">Grenada 1473</option>
              <option value="590" data-name="Guadeloupe">Guadeloupe 590</option>
              <option value="1671" data-name="Guam">Guam 1671</option>
              <option value="502" data-name="Guatemala">Guatemala 502</option>
              <option value="44" data-name="Guernsey">Guernsey 44</option>
              <option value="224" data-name="Guinea (Guinée)">
                Guinea (Guinée) 224
              </option>
              <option value="245" data-name="Guinea-Bissau (Guiné Bissau)">
                Guinea-Bissau (Guiné Bissau) 245
              </option>
              <option value="592" data-name="Guyana">Guyana 592</option>
              <option value="509" data-name="Haiti">Haiti 509</option>
              <option value="504" data-name="Honduras">Honduras 504</option>
              <option value="852" data-name="Hong Kong (香港)">
                Hong Kong (香港) 852
              </option>
              <option value="36" data-name="Hungary (Magyarország)">
                Hungary (Magyarország) 36
              </option>
              <option value="354" data-name="Iceland (Ísland)">
                Iceland (Ísland) 354
              </option>
              <option value="91" data-name="India (भारत)">
                India (भारत) 91
              </option>
              <option value="62" data-name="Indonesia">Indonesia 62</option>
              <option value="98" data-name="Iran (‫ایران‬‎)">
                Iran (‫ایران‬‎) 98
              </option>
              <option value="964" data-name="Iraq (‫العراق‬‎)">
                Iraq (‫العراق‬‎) 964
              </option>
              <option value="353" data-name="Ireland">Ireland 353</option>
              <option value="44" data-name="Isle of Man">Isle of Man 44</option>
              <option value="972" data-name="Israel (‫ישראל‬‎)">
                Israel (‫ישראל‬‎) 972
              </option>
              <option value="39" data-name="Italy (Italia)">
                Italy (Italia) 39
              </option>
              <option value="1876" data-name="Jamaica">Jamaica 1876</option>
              <option value="81" data-name="Japan (日本)">
                Japan (日本) 81
              </option>
              <option value="44" data-name="Jersey">Jersey 44</option>
              <option value="962" data-name="Jordan (‫الأردن‬‎)">
                Jordan (‫الأردن‬‎) 962
              </option>
              <option value="7" data-name="Kazakhstan (Казахстан)">
                Kazakhstan (Казахстан) 7
              </option>
              <option value="254" data-name="Kenya">Kenya 254</option>
              <option value="686" data-name="Kiribati">Kiribati 686</option>
              <option value="383" data-name="Kosovo">Kosovo 383</option>
              <option value="965" data-name="Kuwait (‫الكويت‬‎)">
                Kuwait (‫الكويت‬‎) 965
              </option>
              <option value="996" data-name="Kyrgyzstan (Кыргызстан)">
                Kyrgyzstan (Кыргызстан) 996
              </option>
              <option value="856" data-name="Laos (ລາວ)">Laos (ລາວ) 856</option>
              <option value="371" data-name="Latvia (Latvija)">
                Latvia (Latvija) 371
              </option>
              <option value="961" data-name="Lebanon (‫لبنان‬‎)">
                Lebanon (‫لبنان‬‎) 961
              </option>
              <option value="266" data-name="Lesotho">Lesotho 266</option>
              <option value="231" data-name="Liberia">Liberia 231</option>
              <option value="218" data-name="Libya (‫ليبيا‬‎)">
                Libya (‫ليبيا‬‎) 218
              </option>
              <option value="423" data-name="Liechtenstein">
                Liechtenstein 423
              </option>
              <option value="370" data-name="Lithuania (Lietuva)">
                Lithuania (Lietuva) 370
              </option>
              <option value="352" data-name="Luxembourg">Luxembourg 352</option>
              <option value="853" data-name="Macau (澳門)">
                Macau (澳門) 853
              </option>
              <option value="389" data-name="Macedonia (FYROM) (Македонија)">
                Macedonia (FYROM) (Македонија) 389
              </option>
              <option value="261" data-name="Madagascar (Madagasikara)">
                Madagascar (Madagasikara) 261
              </option>
              <option value="265" data-name="Malawi">Malawi 265</option>
              <option value="60" data-name="Malaysia">Malaysia 60</option>
              <option value="960" data-name="Maldives">Maldives 960</option>
              <option value="223" data-name="Mali">Mali 223</option>
              <option value="356" data-name="Malta">Malta 356</option>
              <option value="692" data-name="Marshall Islands">
                Marshall Islands 692
              </option>
              <option value="596" data-name="Martinique">Martinique 596</option>
              <option value="222" data-name="Mauritania (‫موريتانيا‬‎)">
                Mauritania (‫موريتانيا‬‎) 222
              </option>
              <option value="230" data-name="Mauritius (Moris)">
                Mauritius (Moris) 230
              </option>
              <option value="262" data-name="Mayotte">Mayotte 262</option>
              <option value="52" data-name="Mexico (México)">
                Mexico (México) 52
              </option>
              <option value="691" data-name="Micronesia">Micronesia 691</option>
              <option value="373" data-name="Moldova (Republica Moldova)">
                Moldova (Republica Moldova) 373
              </option>
              <option value="377" data-name="Monaco">Monaco 377</option>
              <option value="976" data-name="Mongolia (Монгол)">
                Mongolia (Монгол) 976
              </option>
              <option value="382" data-name="Montenegro (Crna Gora)">
                Montenegro (Crna Gora) 382
              </option>
              <option value="1664" data-name="Montserrat">
                Montserrat 1664
              </option>
              <option value="212" data-name="Morocco (‫المغرب‬‎)">
                Morocco (‫المغرب‬‎) 212
              </option>
              <option value="258" data-name="Mozambique (Moçambique)">
                Mozambique (Moçambique) 258
              </option>
              <option value="95" data-name="Myanmar (Burma) (မြန်မာ)">
                Myanmar (Burma) (မြန်မာ) 95
              </option>
              <option value="264" data-name="Namibia (Namibië)">
                Namibia (Namibië) 264
              </option>
              <option value="674" data-name="Nauru">Nauru 674</option>
              <option value="977" data-name="Nepal (नेपाल)">
                Nepal (नेपाल) 977
              </option>
              <option value="31" data-name="Netherlands (Nederland)">
                Netherlands (Nederland) 31
              </option>
              <option
                value="687"
                data-name="New Caledonia (Nouvelle-Calédonie)"
              >
                New Caledonia (Nouvelle-Calédonie) 687
              </option>
              <option value="64" data-name="New Zealand">New Zealand 64</option>
              <option value="505" data-name="Nicaragua">Nicaragua 505</option>
              <option value="227" data-name="Niger (Nijar)">
                Niger (Nijar) 227
              </option>
              <option value="234" data-name="Nigeria">Nigeria 234</option>
              <option value="683" data-name="Niue">Niue 683</option>
              <option value="672" data-name="Norfolk Island">
                Norfolk Island 672
              </option>
              <option
                value="850"
                data-name="North Korea (조선 민주주의 인민 공화국)"
              >
                North Korea (조선 민주주의 인민 공화국) 850
              </option>
              <option value="1670" data-name="Northern Mariana Islands">
                Northern Mariana Islands 1670
              </option>
              <option value="47" data-name="Norway (Norge)">
                Norway (Norge) 47
              </option>
              <option value="968" data-name="Oman (‫عُمان‬‎)">
                Oman (‫عُمان‬‎) 968
              </option>
              <option value="92" data-name="Pakistan (‫پاکستان‬‎)">
                Pakistan (‫پاکستان‬‎) 92
              </option>
              <option value="680" data-name="Palau">Palau 680</option>
              <option value="970" data-name="Palestine (‫فلسطين‬‎)">
                Palestine (‫فلسطين‬‎) 970
              </option>
              <option value="507" data-name="Panama (Panamá)">
                Panama (Panamá) 507
              </option>
              <option value="675" data-name="Papua New Guinea">
                Papua New Guinea 675
              </option>
              <option value="595" data-name="Paraguay">Paraguay 595</option>
              <option value="51" data-name="Peru (Perú)">Peru (Perú) 51</option>
              <option value="63" data-name="Philippines">Philippines 63</option>
              <option value="48" data-name="Poland (Polska)">
                Poland (Polska) 48
              </option>
              <option value="351" data-name="Portugal">Portugal 351</option>
              <option value="1" data-name="Puerto Rico">Puerto Rico 1</option>
              <option value="974" data-name="Qatar (‫قطر‬‎)">
                Qatar (‫قطر‬‎) 974
              </option>
              <option value="262" data-name="Réunion (La Réunion)">
                Réunion (La Réunion) 262
              </option>
              <option value="40" data-name="Romania (România)">
                Romania (România) 40
              </option>
              <option value="7" data-name="Russia (Россия)">
                Russia (Россия) 7
              </option>
              <option value="250" data-name="Rwanda">Rwanda 250</option>
              <option value="590" data-name="Saint Barthélemy">
                Saint Barthélemy 590
              </option>
              <option value="290" data-name="Saint Helena">
                Saint Helena 290
              </option>
              <option value="1869" data-name="Saint Kitts and Nevis">
                Saint Kitts and Nevis 1869
              </option>
              <option value="1758" data-name="Saint Lucia">
                Saint Lucia 1758
              </option>
              <option
                value="590"
                data-name="Saint Martin (Saint-Martin (partie française))"
              >
                Saint Martin (Saint-Martin (partie française)) 590
              </option>
              <option
                value="508"
                data-name="Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)"
              >
                Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon) 508
              </option>
              <option value="1784" data-name="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines 1784
              </option>
              <option value="685" data-name="Samoa">Samoa 685</option>
              <option value="378" data-name="San Marino">San Marino 378</option>
              <option
                value="239"
                data-name="São Tomé and Príncipe (São Tomé e Príncipe)"
              >
                São Tomé and Príncipe (São Tomé e Príncipe) 239
              </option>
              <option
                value="966"
                data-name="Saudi Arabia (‫المملكة العربية السعودية‬‎)"
              >
                Saudi Arabia (‫المملكة العربية السعودية‬‎) 966
              </option>
              <option value="221" data-name="Senegal (Sénégal)">
                Senegal (Sénégal) 221
              </option>
              <option value="381" data-name="Serbia (Србија)">
                Serbia (Србија) 381
              </option>
              <option value="248" data-name="Seychelles">Seychelles 248</option>
              <option value="232" data-name="Sierra Leone">
                Sierra Leone 232
              </option>
              <option value="65" data-name="Singapore">Singapore 65</option>
              <option value="1721" data-name="Sint Maarten">
                Sint Maarten 1721
              </option>
              <option value="421" data-name="Slovakia (Slovensko)">
                Slovakia (Slovensko) 421
              </option>
              <option value="386" data-name="Slovenia (Slovenija)">
                Slovenia (Slovenija) 386
              </option>
              <option value="677" data-name="Solomon Islands">
                Solomon Islands 677
              </option>
              <option value="252" data-name="Somalia (Soomaaliya)">
                Somalia (Soomaaliya) 252
              </option>
              <option value="27" data-name="South Africa">
                South Africa 27
              </option>
              <option value="82" data-name="South Korea (대한민국)">
                South Korea (대한민국) 82
              </option>
              <option value="211" data-name="South Sudan (‫جنوب السودان‬‎)">
                South Sudan (‫جنوب السودان‬‎) 211
              </option>
              <option value="34" data-name="Spain (España)">
                Spain (España) 34
              </option>
              <option value="94" data-name="Sri Lanka (ශ්‍රී ලංකාව)">
                Sri Lanka (ශ්‍රී ලංකාව) 94
              </option>
              <option value="249" data-name="Sudan (‫السودان‬‎)">
                Sudan (‫السودان‬‎) 249
              </option>
              <option value="597" data-name="Suriname">Suriname 597</option>
              <option value="47" data-name="Svalbard and Jan Mayen">
                Svalbard and Jan Mayen 47
              </option>
              <option value="268" data-name="Swaziland">Swaziland 268</option>
              <option value="46" data-name="Sweden (Sverige)">
                Sweden (Sverige) 46
              </option>
              <option value="41" data-name="Switzerland (Schweiz)">
                Switzerland (Schweiz) 41
              </option>
              <option value="963" data-name="Syria (‫سوريا‬‎)">
                Syria (‫سوريا‬‎) 963
              </option>
              <option value="886" data-name="Taiwan (台灣)">
                Taiwan (台灣) 886
              </option>
              <option value="992" data-name="Tajikistan">Tajikistan 992</option>
              <option value="255" data-name="Tanzania">Tanzania 255</option>
              <option value="66" data-name="Thailand (ไทย)">
                Thailand (ไทย) 66
              </option>
              <option value="670" data-name="Timor-Leste">
                Timor-Leste 670
              </option>
              <option value="228" data-name="Togo">Togo 228</option>
              <option value="690" data-name="Tokelau">Tokelau 690</option>
              <option value="676" data-name="Tonga">Tonga 676</option>
              <option value="1868" data-name="Trinidad and Tobago">
                Trinidad and Tobago 1868
              </option>
              <option value="216" data-name="Tunisia (‫تونس‬‎)">
                Tunisia (‫تونس‬‎) 216
              </option>
              <option value="90" data-name="Turkey (Türkiye)">
                Turkey (Türkiye) 90
              </option>
              <option value="993" data-name="Turkmenistan">
                Turkmenistan 993
              </option>
              <option value="1649" data-name="Turks and Caicos Islands">
                Turks and Caicos Islands 1649
              </option>
              <option value="688" data-name="Tuvalu">Tuvalu 688</option>
              <option value="1340" data-name="U.S. Virgin Islands">
                U.S. Virgin Islands 1340
              </option>
              <option value="256" data-name="Uganda">Uganda 256</option>
              <option value="380" data-name="Ukraine (Україна)">
                Ukraine (Україна) 380
              </option>
              <option
                value="971"
                data-name="United Arab Emirates (‫الإمارات العربية المتحدة‬‎)"
              >
                United Arab Emirates (‫الإمارات العربية المتحدة‬‎) 971
              </option>
              <option value="44" data-name="United Kingdom">
                United Kingdom 44
              </option>
              <option value="1" data-name="United States">
                United States 1
              </option>
              <option value="598" data-name="Uruguay">Uruguay 598</option>
              <option value="998" data-name="Uzbekistan (Oʻzbekiston)">
                Uzbekistan (Oʻzbekiston) 998
              </option>
              <option value="678" data-name="Vanuatu">Vanuatu 678</option>
              <option value="39" data-name="Vatican City (Città del Vaticano)">
                Vatican City (Città del Vaticano) 39
              </option>
              <option value="58" data-name="Venezuela">Venezuela 58</option>
              <option value="84" data-name="Vietnam (Việt Nam)">
                Vietnam (Việt Nam) 84
              </option>
              <option
                value="681"
                data-name="Wallis and Futuna (Wallis-et-Futuna)"
              >
                Wallis and Futuna (Wallis-et-Futuna) 681
              </option>
              <option value="212" data-name="Western Sahara (‫الصحراء الغربية‬‎)">
                Western Sahara (‫الصحراء الغربية‬‎) 212
              </option>
              <option value="967" data-name="Yemen (‫اليمن‬‎)">
                Yemen (‫اليمن‬‎) 967
              </option>
              <option value="260" data-name="Zambia">Zambia 260</option>
              <option value="263" data-name="Zimbabwe">Zimbabwe 263</option>
              <option value="358" data-name="Åland Islands">
                Åland Islands 358
              </option>
            </select>
          </div>

          <div class="w-[76%] md:w-[48%] max-md:mb-8">
            <label class="legend16-ligth text-[#212121]">
              *Número do telefone
            </label>
            <input
              name="phone"
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
              required
            />
          </div>
        </div>

        <div class="w-full mb-8 flex justify-between flex-wrap">
          <div class="w-full md:w-[48%] max-md:mb-8">
            <label class="legend16-ligth text-[#212121]">
              Cidade
            </label>
            <input
              name="city"
              class="w-full h-10 body20-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
            />
          </div>

          <div class="w-full md:w-[48%]">
            <label class="legend16-ligth text-[#212121]">
              Endereço da Boutique
            </label>
            <input
              name="address"
              disabled
              value={"Avenida Higienópolis, 618 - Higienópolis - São Paulo"}
              class="w-full h-10 text-[15px] legend16-ligth outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
              placeholder={""}
            />
          </div>
        </div>

        <div class="w-full mb-8 flex flex-col">
          <label class="block legend16-ligth text-[#212121] mb-4">
            Sua mensagem
          </label>
          <textarea
            name="message"
            class="w-full h-[200px] pl-6 pt-6 body20-ligth outline-none border transition-[0.3s]  rounded-sm border-solid border-[#6e5e567d] hover:border-[#222]"
            placeholder={""}
          >
          </textarea>
        </div>

        <div class="w-full flex items-center mb-8 relative">
          <input
            required
            checked={accept.value}
            type="checkbox"
            name="accept"
            class="opacity-0 absolute left-0"
          />
          <div
            onClick={() => accept.value = !accept.value}
            class={`min-w-5 max-w-5 min-h-5 max-h-5 border cursor-pointer flex items-center justify-center before:text-white mr-2 relative before:content-['✓'] before:aboslute rounded-[50%] border-solid ${
              accept.value
                ? "border-[#127749] bg-[#127749]"
                : "border-[#6e5e567d]"
            }`}
          >
          </div>
          <p class="legend16-ligth text-[#212121]">
            *Eu li e aceito os{" "}
            <a
              class="hover:underline text-[#127749] text-[bold]"
              href="/institucional/privacidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos e Condições e a Política de Privacidade.
            </a>
          </p>
        </div>

        <div class="w-full flex justify-end">
          <button
            type="submit"
            disabled={loading}
            class="w-[200px] h-12 float-right flex items-center justify-center bg-[#127749] hover:opacity-80 fixed14 text-white transition-[0.3s] rounded-[50px] border-0"
          >
            Enviar
          </button>
        </div>
        {success.value
          ? (
            <p class="w-full mt-7 text-center">
              Agradecemos o seu interesse nos relógios Rolex. Sua mensagem foi
              enviada com sucesso. Após análise de sua solicitação, um dos
              nossos representantes a responderá o mais rapidamente possível.
            </p>
          )
          : <></>}
      </form>
    </div>
  );
}
