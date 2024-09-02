import { useSignal } from "@preact/signals";
import Icon from "../../components/ui/Icon.tsx";
import type { JSX } from "preact";

interface Props {
  type: string;
  valueInput: string;
}

export default function Form({ type, valueInput }: Props) {
  const loading = useSignal(false);
  const success = useSignal(false);
  const accept = useSignal(false);
  const step = useSignal(false);

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
    <div class={`${type == 'pdp' ? 'bg-[#FFF]' : 'bg-[#F5F3F0]'} w-full my-0 pt-[60px] md:pt-[90px] max-md:px-[7%]`}>
      {step.value && !success.value &&
        (
          <div class="relative rolex-container translate-y-[-3.5rem] md:-translate-y-20">
            <span onClick={() => step.value = false} class="flex gap-1 items-center mt-2 cursor-pointer absolute top-0 text-[rgb(69,44,30)] font-semibold leading-normal text-[1em]">
              <Icon
                size={12}
                id="ChevronLeft"
                strokeWidth={3}
              />Voltar</span>
          </div>
        )
      }

      {
        !success.value && (
          <div>
            <h1 class="text-center body24 text-[#452c1e] font-bold">
              Enviar uma mensagem
            </h1>
            <p class="text-center mb-5 headline50 text-[#452c1e] font-bold leading-[1.1]">
              {step.value
                ? "Insira suas informações de contato"
                : "Insira sua mensagem"}
            </p>
          </div>
        )
      }

      {!success.value && (
        <p class="text-center mb-10 text-[20px] md:max-w-[1000px] mx-auto">
          {step.value
            ? ""
            : "Agradecemos o seu interesse nos relógios Rolex. Insira sua mensagem abaixo e responderemos o mais brevemente possível."}
        </p>
      )}


      <form
        class={`w-full max-w-[956px] xxxl:max-w-[1200px] mx-auto flex flex-wrap justify-between ${!success.value && 'mt-10'}`}
        onSubmit={handleSubmit}
      >
        {step.value && !success.value && (
          <>
            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full md:w-[14%] max-md:mb-8">
                <label class="legend16 text-[#212121]">
                  Título
                </label>
                <select
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
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
                <label class="legend16 text-[#212121]">
                  *Nome
                </label>
                <input
                  name="name"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                  required
                />
              </div>
              <div class="w-full md:w-[40%]">
                <label class="legend16 text-[#212121]">
                  *Sobrenome
                </label>
                <input
                  name="lastname"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                  required
                />
              </div>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full">
                <label class="legend16 text-[#212121]">
                  *E-mail
                </label>
                <input
                  name="email"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                  required
                />
              </div>
            </div>

            <div class="w-full mb-8">
              <label class="fixed14-ligth">e/ou</label>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full md:w-[22%] max-md:mb-8">
                <label class="legend16 text-[#212121]">
                  Código
                </label>

                <select
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
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
                  <option value="1264" data-name="Anguilla">
                    Anguilla 1264
                  </option>
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
                  <option value="1246" data-name="Barbados">
                    Barbados 1246
                  </option>
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
                  <option
                    value="246"
                    data-name="British Indian Ocean Territory"
                  >
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
                  <option value="506" data-name="Costa Rica">
                    Costa Rica 506
                  </option>
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
                  <option
                    value="420"
                    data-name="Czech Republic (Česká republika)"
                  >
                    Czech Republic (Česká republika) 420
                  </option>
                  <option value="45" data-name="Denmark (Danmark)">
                    Denmark (Danmark) 45
                  </option>
                  <option value="253" data-name="Djibouti">Djibouti 253</option>
                  <option value="1767" data-name="Dominica">
                    Dominica 1767
                  </option>
                  <option
                    value="1"
                    data-name="Dominican Republic (República Dominicana)"
                  >
                    Dominican Republic (República Dominicana) 1
                  </option>
                  <option value="593" data-name="Ecuador">Ecuador 593</option>
                  <option value="20" data-name="Egypt (‫مصر‬‎)">
                    Egypt (‫مصر‬‎) 20
                  </option>
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
                  <option
                    value="500"
                    data-name="Falkland Islands (Islas Malvinas)"
                  >
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
                  <option
                    value="594"
                    data-name="French Guiana (Guyane française)"
                  >
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
                  <option value="350" data-name="Gibraltar">
                    Gibraltar 350
                  </option>
                  <option value="30" data-name="Greece (Ελλάδα)">
                    Greece (Ελλάδα) 30
                  </option>
                  <option value="299" data-name="Greenland (Kalaallit Nunaat)">
                    Greenland (Kalaallit Nunaat) 299
                  </option>
                  <option value="1473" data-name="Grenada">Grenada 1473</option>
                  <option value="590" data-name="Guadeloupe">
                    Guadeloupe 590
                  </option>
                  <option value="1671" data-name="Guam">Guam 1671</option>
                  <option value="502" data-name="Guatemala">
                    Guatemala 502
                  </option>
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
                  <option value="44" data-name="Isle of Man">
                    Isle of Man 44
                  </option>
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
                  <option value="856" data-name="Laos (ລາວ)">
                    Laos (ລາວ) 856
                  </option>
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
                  <option value="352" data-name="Luxembourg">
                    Luxembourg 352
                  </option>
                  <option value="853" data-name="Macau (澳門)">
                    Macau (澳門) 853
                  </option>
                  <option
                    value="389"
                    data-name="Macedonia (FYROM) (Македонија)"
                  >
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
                  <option value="596" data-name="Martinique">
                    Martinique 596
                  </option>
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
                  <option value="691" data-name="Micronesia">
                    Micronesia 691
                  </option>
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
                  <option value="64" data-name="New Zealand">
                    New Zealand 64
                  </option>
                  <option value="505" data-name="Nicaragua">
                    Nicaragua 505
                  </option>
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
                  <option value="51" data-name="Peru (Perú)">
                    Peru (Perú) 51
                  </option>
                  <option value="63" data-name="Philippines">
                    Philippines 63
                  </option>
                  <option value="48" data-name="Poland (Polska)">
                    Poland (Polska) 48
                  </option>
                  <option value="351" data-name="Portugal">Portugal 351</option>
                  <option value="1" data-name="Puerto Rico">
                    Puerto Rico 1
                  </option>
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
                  <option
                    value="1784"
                    data-name="Saint Vincent and the Grenadines"
                  >
                    Saint Vincent and the Grenadines 1784
                  </option>
                  <option value="685" data-name="Samoa">Samoa 685</option>
                  <option value="378" data-name="San Marino">
                    San Marino 378
                  </option>
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
                  <option value="248" data-name="Seychelles">
                    Seychelles 248
                  </option>
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
                  <option value="268" data-name="Swaziland">
                    Swaziland 268
                  </option>
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
                  <option value="992" data-name="Tajikistan">
                    Tajikistan 992
                  </option>
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
                  <option
                    value="39"
                    data-name="Vatican City (Città del Vaticano)"
                  >
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
                  <option
                    value="212"
                    data-name="Western Sahara (‫الصحراء الغربية‬‎)"
                  >
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

              <div class="w-full md:w-[74%] max-md:mb-8">
                <label class="legend16 text-[#212121]">
                  Telefone
                </label>
                <input
                  name="phone"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                />
              </div>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <select
                class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                id="customerCountry"
                name="customerCountry"
              >
                <option value="Selecione seu país">Selecione seu país</option>
                <option value="Afghanistan (‫افغانستان‬‎)">
                  Afghanistan (‫افغانستان‬‎)
                </option>
                <option value="Albania (Shqipëri)">Albania (Shqipëri)</option>
                <option value="Algeria (‫الجزائر‬‎)">Algeria (‫الجزائر‬‎)</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia (Հայաստան)">Armenia (Հայաստան)</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria (Österreich)">
                  Austria (Österreich)
                </option>
                <option value="Azerbaijan (Azərbaycan)">
                  Azerbaijan (Azərbaycan)
                </option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain (‫البحرين‬‎)">Bahrain (‫البحرين‬‎)</option>
                <option value="Bangladesh (বাংলাদেশ)">
                  Bangladesh (বাংলাদেশ)
                </option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus (Беларусь)">Belarus (Беларусь)</option>
                <option value="Belgium (België)">Belgium (België)</option>
                <option value="Belize">Belize</option>
                <option value="Benin (Bénin)">Benin (Bénin)</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan (འབྲུག)">Bhutan (འབྲུག)</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina (Босна и Херцеговина)">
                  Bosnia and Herzegovina (Босна и Херцеговина)
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil (Brasil)">Brazil (Brasil)</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="British Virgin Islands">
                  British Virgin Islands
                </option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria (България)">Bulgaria (България)</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi (Uburundi)">Burundi (Uburundi)</option>
                <option value="Cambodia (កម្ពុជា)">Cambodia (កម្ពុជា)</option>
                <option value="Cameroon (Cameroun)">Cameroon (Cameroun)</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde (Kabu Verdi)">
                  Cape Verde (Kabu Verdi)
                </option>
                <option value="Caribbean Netherlands">
                  Caribbean Netherlands
                </option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic (République centrafricaine)">
                  Central African Republic (République centrafricaine)
                </option>
                <option value="Chad (Tchad)">Chad (Tchad)</option>
                <option value="Chile">Chile</option>
                <option value="China (中国)">China (中国)</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros (‫جزر القمر‬‎)">Comoros (‫جزر القمر‬‎)</option>
                <option value="Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)">
                  Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                </option>
                <option value="Congo (Republic) (Congo-Brazzaville)">
                  Congo (Republic) (Congo-Brazzaville)
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Cyprus (Κύπρος)">Cyprus (Κύπρος)</option>
                <option value="Czech Republic (Česká republika)">
                  Czech Republic (Česká republika)
                </option>
                <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                <option value="Denmark (Danmark)">Denmark (Danmark)</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic (República Dominicana)">
                  Dominican Republic (República Dominicana)
                </option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt (‫مصر‬‎)">Egypt (‫مصر‬‎)</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea (Guinea Ecuatorial)">
                  Equatorial Guinea (Guinea Ecuatorial)
                </option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia (Eesti)">Estonia (Eesti)</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Islas Malvinas)">
                  Falkland Islands (Islas Malvinas)
                </option>
                <option value="Faroe Islands (Føroyar)">
                  Faroe Islands (Føroyar)
                </option>
                <option value="Fiji">Fiji</option>
                <option value="Finland (Suomi)">Finland (Suomi)</option>
                <option value="France">France</option>
                <option value="French Guiana (Guyane française)">
                  French Guiana (Guyane française)
                </option>
                <option value="French Polynesia (Polynésie française)">
                  French Polynesia (Polynésie française)
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia (საქართველო)">
                  Georgia (საქართველო)
                </option>
                <option value="Germany (Deutschland)">
                  Germany (Deutschland)
                </option>
                <option value="Ghana (Gaana)">Ghana (Gaana)</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece (Ελλάδα)">Greece (Ελλάδα)</option>
                <option value="Greenland (Kalaallit Nunaat)">
                  Greenland (Kalaallit Nunaat)
                </option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea (Guinée)">Guinea (Guinée)</option>
                <option value="Guinea-Bissau (Guiné Bissau)">
                  Guinea-Bissau (Guiné Bissau)
                </option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong (香港)">Hong Kong (香港)</option>
                <option value="Hungary (Magyarország)">
                  Hungary (Magyarország)
                </option>
                <option value="Iceland (Ísland)">Iceland (Ísland)</option>
                <option value="India (भारत)">India (भारत)</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran (‫ایران‬‎)">Iran (‫ایران‬‎)</option>
                <option value="Iraq (‫العراق‬‎)">Iraq (‫العراق‬‎)</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel (‫ישראל‬‎)">Israel (‫ישראל‬‎)</option>
                <option value="Italy (Italia)">Italy (Italia)</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan (日本)">Japan (日本)</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan (‫الأردن‬‎)">Jordan (‫الأردن‬‎)</option>
                <option value="Kazakhstan (Казахстан)">
                  Kazakhstan (Казахстан)
                </option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait (‫الكويت‬‎)">Kuwait (‫الكويت‬‎)</option>
                <option value="Kyrgyzstan (Кыргызстан)">
                  Kyrgyzstan (Кыргызстан)
                </option>
                <option value="Laos (ລາວ)">Laos (ລາວ)</option>
                <option value="Latvia (Latvija)">Latvia (Latvija)</option>
                <option value="Lebanon (‫لبنان‬‎)">Lebanon (‫لبنان‬‎)</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya (‫ليبيا‬‎)">Libya (‫ليبيا‬‎)</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania (Lietuva)">Lithuania (Lietuva)</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau (澳門)">Macau (澳門)</option>
                <option value="Macedonia (FYROM) (Македонија)">
                  Macedonia (FYROM) (Македонија)
                </option>
                <option value="Madagascar (Madagasikara)">
                  Madagascar (Madagasikara)
                </option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania (‫موريتانيا‬‎)">
                  Mauritania (‫موريتانيا‬‎)
                </option>
                <option value="Mauritius (Moris)">Mauritius (Moris)</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico (México)">Mexico (México)</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova (Republica Moldova)">
                  Moldova (Republica Moldova)
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia (Монгол)">Mongolia (Монгол)</option>
                <option value="Montenegro (Crna Gora)">
                  Montenegro (Crna Gora)
                </option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco (‫المغرب‬‎)">Morocco (‫المغرب‬‎)</option>
                <option value="Mozambique (Moçambique)">
                  Mozambique (Moçambique)
                </option>
                <option value="Myanmar (Burma) (မြန်မာ)">
                  Myanmar (Burma) (မြန်မာ)
                </option>
                <option value="Namibia (Namibië)">Namibia (Namibië)</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal (नेपाल)">Nepal (नेपाल)</option>
                <option value="Netherlands (Nederland)">
                  Netherlands (Nederland)
                </option>
                <option value="New Caledonia (Nouvelle-Calédonie)">
                  New Caledonia (Nouvelle-Calédonie)
                </option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger (Nijar)">Niger (Nijar)</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="North Korea (조선 민주주의 인민 공화국)">
                  North Korea (조선 민주주의 인민 공화국)
                </option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway (Norge)">Norway (Norge)</option>
                <option value="Oman (‫عُمان‬‎)">Oman (‫عُمان‬‎)</option>
                <option value="Pakistan (‫پاکستان‬‎)">Pakistan (‫پاکستان‬‎)</option>
                <option value="Palau">Palau</option>
                <option value="Palestine (‫فلسطين‬‎)">Palestine (‫فلسطين‬‎)</option>
                <option value="Panama (Panamá)">Panama (Panamá)</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru (Perú)">Peru (Perú)</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland (Polska)">Poland (Polska)</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar (‫قطر‬‎)">Qatar (‫قطر‬‎)</option>
                <option value="Romania (România)">Romania (România)</option>
                <option value="Russia (Россия)">Russia (Россия)</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Réunion (La Réunion)">
                  Réunion (La Réunion)
                </option>
                <option value="Saint Barthélemy">Saint Barthélemy</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Martin (Saint-Martin (partie française))">
                  Saint Martin (Saint-Martin (partie française))
                </option>
                <option value="Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)">
                  Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)
                </option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Saudi Arabia (‫المملكة العربية السعودية‬‎)">
                  Saudi Arabia (‫المملكة العربية السعودية‬‎)
                </option>
                <option value="Senegal (Sénégal)">Senegal (Sénégal)</option>
                <option value="Serbia (Србија)">Serbia (Србија)</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Slovakia (Slovensko)">
                  Slovakia (Slovensko)
                </option>
                <option value="Slovenia (Slovenija)">
                  Slovenia (Slovenija)
                </option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia (Soomaaliya)">
                  Somalia (Soomaaliya)
                </option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea (대한민국)">
                  South Korea (대한민국)
                </option>
                <option value="South Sudan (‫جنوب السودان‬‎)">
                  South Sudan (‫جنوب السودان‬‎)
                </option>
                <option value="Spain (España)">Spain (España)</option>
                <option value="Sri Lanka (ශ්‍රී ලංකාව)">
                  Sri Lanka (ශ්‍රී ලංකාව)
                </option>
                <option value="Sudan (‫السودان‬‎)">Sudan (‫السودان‬‎)</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden (Sverige)">Sweden (Sverige)</option>
                <option value="Switzerland (Schweiz)">
                  Switzerland (Schweiz)
                </option>
                <option value="Syria (‫سوريا‬‎)">Syria (‫سوريا‬‎)</option>
                <option value="São Tomé and Príncipe (São Tomé e Príncipe)">
                  São Tomé and Príncipe (São Tomé e Príncipe)
                </option>
                <option value="Taiwan (台灣)">Taiwan (台灣)</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand (ไทย)">Thailand (ไทย)</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia (‫تونس‬‎)">Tunisia (‫تونس‬‎)</option>
                <option value="Turkey (Türkiye)">Turkey (Türkiye)</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine (Україна)">Ukraine (Україна)</option>
                <option value="United Arab Emirates (‫الإمارات العربية المتحدة‬‎)">
                  United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan (Oʻzbekiston)">
                  Uzbekistan (Oʻzbekiston)
                </option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City (Città del Vaticano)">
                  Vatican City (Città del Vaticano)
                </option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam (Việt Nam)">Vietnam (Việt Nam)</option>
                <option value="Wallis and Futuna (Wallis-et-Futuna)">
                  Wallis and Futuna (Wallis-et-Futuna)
                </option>
                <option value="Western Sahara (‫الصحراء الغربية‬‎)">
                  Western Sahara (‫الصحراء الغربية‬‎)
                </option>
                <option value="Yemen (‫اليمن‬‎)">Yemen (‫اليمن‬‎)</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Åland Islands">Åland Islands</option>
              </select>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full">
                <label class="legend16 text-[#212121]">
                  País da loja
                </label>
                <input
                  disabled
                  value="Brasil"
                  name="city"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                />
              </div>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full">
                <label class="legend16 text-[#212121]">
                  Cidade da boutique
                </label>
                <input
                  disabled
                  value="São Paulo"
                  name="city"
                  class="w-full h-10 body20-ligth bg-transparent outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                />
              </div>
            </div>

            <div class="w-full mb-8 flex justify-between flex-wrap">
              <div class="w-full">
                <label class="legend16 text-[#212121]">
                  Endereço da boutique
                </label>
                <input
                  name="address"
                  disabled
                  value={"Avenida Higienópolis, 618 - Higienópolis - São Paulo"}
                  class="w-full h-10 text-[15px] legend16 outline-none border-b transition-[0.3s]  rounded-sm border-solid border-b-[#6e5e567d] hover:border-[#212121]"
                  placeholder={""}
                />
              </div>
            </div>
          </>
        )}

        {!step.value && !success.value && (
          <div class="w-full mb-8 flex flex-col">
            <textarea
              name="message"
              value={valueInput ?? 'testando'}
              class={`${type == 'pdp' ? 'bg-[#f9f7f4]' : 'bg-white'} w-full h-[200px] pl-6 pt-6 body20-ligth outline-none border-0 transition-[0.3s] rounded-sm focus:border-2 focus:border-solid focus:border-[#127749]`}
              placeholder={"Insira sua mensagem"}
            >
            </textarea>

            <button
              class="my-4 mx-auto w-[150px] h-12 float-right flex items-center justify-center bg-[#127749] hover:bg-[#0b4c2f] fixed14 text-white transition-[0.3s] rounded-[50px] border-0"
              onClick={() => step.value = true}
            >
              Próximo
              <svg width={14} height={14} class="ml-2" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 15 15" style="enable-background:new 0 0 15 15;" xml:space="preserve">
                <path fill="currentColor" class="st0" d="M12,7.5l-1.3,1.4L4.6,15l-1.5-1.5l6.1-6.1L3,1.4L4.5,0l6.1,6.1l0,0L12,7.5z" />
              </svg>
            </button>
          </div>
        )}

        {step.value && !success.value && (
          <>
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
                class={`min-w-5 max-w-5 min-h-5 max-h-5 border cursor-pointer flex items-center justify-center before:text-white mr-2 relative before:content-['✓'] before:aboslute rounded-[50%] border-solid ${accept.value
                  ? "border-[#127749] bg-[#127749]"
                  : "border-[#6e5e567d]"
                  }`}
              >
              </div>
              <p class="legend16 text-[#212121]">
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

            <div class="w-full flex justify-center mb-10">
              <button
                type="submit"
                disabled={loading}
                class="w-[100px] h-12 flex items-center justify-center bg-[#127749] hover:bg-[#0b4c2f] fixed14 text-white transition-[0.3s] rounded-[50px] border-0"
              >
                Enviar
              </button>
            </div>
          </>
        )}
      </form>

      {success.value
        ? (
          <div class="flex flex-col items-center justify-center w-full px-0 pb-[60px] md:pb-[90px]">
            <p class="text-center body24 text-[#452c1e] font-bold">Enviar uma mensagem</p>
            <p class="text-center mb-5 headline50 text-[#452c1e] font-bold leading-[1.1]">Obrigado</p>
            <p class="max-w-[532px] mx-auto text-center body24 text-[#452c1e] font-bold mb-7">Sua mensagem foi enviada com sucesso para a equipe Rolex da Dryzun</p>
            <p class="max-w-[532px] mx-auto text-center text-[20px]">Após análise de sua solicitação, um dos nossos consultores de venda lhe responderá o mais rapidamente</p>
            <a class=" w-[100px] h-12 flex items-center justify-center bg-[#127749] hover:bg-[#0b4c2f] fixed14 text-white transition-[0.3s] rounded-[50px] mt-7" href="/rolex/descubra">Voltar</a>

            <img class="mt-[60px] md:mt-[90px] max-w-[1025px] mx-auto w-full hidden md:block" src={'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/1319881f-1760-4f08-addb-9f7232a3d0cd'} alt={'fale com a Dryzun – distribuidor oficial de relógios Rolex'} />
            <img class="mt-[60px] md:mt-[90px] max-w-[1025px] mx-auto w-full md:hidden" src={'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/9049/b8460ae8-5bdd-4e23-a43f-908a993fecbd'} alt={'fale com a Dryzun – distribuidor oficial de relógios Rolex'} />

          </div>
        )
        : <></>}
    </div>
  );
}
