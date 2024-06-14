import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ContactI {
    phone: string;
    whats: string;
    email: string;
    /** @format textarea */
    clock: string;
}

export interface LinkI {
    label: string;
    link: string;
    newtab: boolean;
}

export interface SocialI {
    label: string;
    link: string;
    image: ImageWidget;
}

interface Props {
    contact: ContactI;
    aboutlinks: LinkI[];
    doubtslinks: LinkI[];
    sociais: SocialI[];
}

function Institucionais({ contact, aboutlinks, doubtslinks, sociais }: Props) {
    return (
        <>
            <div class="py-12 hidden md:flex flex-row gap-6 items-start justify-between">
                <div class="w-auto md:flex flex-col">
                    <h4
                        class="text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] mb-4">
                        Contato
                    </h4>
                    <ul class="flex flex-col gap-2">
                        <li class="flex items-center"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.52344 0.912109L4.38281 2.97461C4.5332 3.31836 4.44727 3.72656 4.14648 3.96289L3.09375 4.84375C3.80273 6.34766 5.02734 7.57227 6.53125 8.28125L7.41211 7.22852C7.64844 6.92773 8.05664 6.8418 8.40039 6.99219L10.4629 7.85156C10.8711 8.00195 11.0645 8.45312 10.957 8.86133L10.4414 10.752C10.334 11.1172 10.0117 11.375 9.625 11.375C4.29688 11.375 0 7.07812 0 1.75C0 1.36328 0.257812 1.04102 0.623047 0.933594L2.51367 0.417969C2.92188 0.310547 3.37305 0.503906 3.52344 0.912109Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.phone}</a></li>
                        <li class="flex items-center"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3906 1.92969C11.5391 3.07812 12.25 4.58203 12.25 6.22266C12.25 9.55859 9.46094 12.293 6.09766 12.293C5.08594 12.293 4.10156 12.0195 3.19922 11.5547L0 12.375L0.847656 9.23047C0.328125 8.32812 0.0273438 7.28906 0.0273438 6.19531C0.0273438 2.85938 2.76172 0.125 6.09766 0.125C7.73828 0.125 9.26953 0.78125 10.3906 1.92969ZM6.09766 11.2539C8.88672 11.2539 11.2109 8.98438 11.2109 6.22266C11.2109 4.85547 10.6367 3.59766 9.67969 2.64062C8.72266 1.68359 7.46484 1.16406 6.125 1.16406C3.33594 1.16406 1.06641 3.43359 1.06641 6.19531C1.06641 7.15234 1.33984 8.08203 1.83203 8.90234L1.96875 9.09375L1.44922 10.9531L3.36328 10.4336L3.52734 10.543C4.32031 11.0078 5.19531 11.2539 6.09766 11.2539ZM8.88672 7.48047C9.02344 7.5625 9.13281 7.58984 9.16016 7.67188C9.21484 7.72656 9.21484 8.02734 9.07812 8.38281C8.94141 8.73828 8.33984 9.06641 8.06641 9.09375C7.57422 9.17578 7.19141 9.14844 6.23438 8.71094C4.70312 8.05469 3.71875 6.52344 3.63672 6.44141C3.55469 6.33203 3.03516 5.62109 3.03516 4.85547C3.03516 4.11719 3.41797 3.76172 3.55469 3.59766C3.69141 3.43359 3.85547 3.40625 3.96484 3.40625C4.04688 3.40625 4.15625 3.40625 4.23828 3.40625C4.34766 3.40625 4.45703 3.37891 4.59375 3.67969C4.70312 3.98047 5.03125 4.71875 5.05859 4.80078C5.08594 4.88281 5.11328 4.96484 5.05859 5.07422C4.78516 5.64844 4.45703 5.62109 4.62109 5.89453C5.22266 6.90625 5.79688 7.26172 6.69922 7.69922C6.83594 7.78125 6.91797 7.75391 7.02734 7.67188C7.10938 7.5625 7.41016 7.20703 7.49219 7.07031C7.60156 6.90625 7.71094 6.93359 7.84766 6.98828C7.98438 7.04297 8.72266 7.39844 8.88672 7.48047Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.whats}</a></li>
                        <li class="flex items-center"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.03125 0.75H9.96875C10.5273 0.75 11 1.22266 11 1.78125C11 2.125 10.8281 2.42578 10.5703 2.61914L5.9082 6.12109C5.65039 6.31445 5.32812 6.31445 5.07031 6.12109L0.408203 2.61914C0.150391 2.42578 0 2.125 0 1.78125C0 1.22266 0.451172 0.75 1.03125 0.75ZM0 3.15625L4.66211 6.67969C5.15625 7.04492 5.82227 7.04492 6.31641 6.67969L11 3.15625V7.625C11 8.39844 10.377 9 9.625 9H1.375C0.601562 9 0 8.39844 0 7.625V3.15625Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.email}</a></li>
                        <li class="flex items-center"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0.875C8.45508 0.875 10.2598 1.92773 11.248 3.625C12.2363 5.34375 12.2363 7.42773 11.248 9.125C10.2598 10.8438 8.45508 11.875 6.5 11.875C4.52344 11.875 2.71875 10.8438 1.73047 9.125C0.742188 7.42773 0.742188 5.34375 1.73047 3.625C2.71875 1.92773 4.52344 0.875 6.5 0.875ZM5.98438 3.45312V6.375C5.98438 6.54688 6.07031 6.71875 6.19922 6.80469L8.26172 8.17969C8.49805 8.35156 8.82031 8.28711 8.99219 8.05078C9.14258 7.81445 9.07812 7.49219 8.8418 7.32031L7.01562 6.11719V3.45312C7.01562 3.17383 6.7793 2.9375 6.5 2.9375C6.19922 2.9375 5.98438 3.17383 5.98438 3.45312Z" fill="#666461" />
                        </svg>
                            <p dangerouslySetInnerHTML={{ __html: contact?.clock }} class="ml-2 block text-sm not-italic font-normal leading-[normal] text-[#666461]"></p></li>
                    </ul>
                </div>


                <div class="w-auto md:flex flex-col">
                    <h4
                        class="text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] mb-4">
                        sobre
                    </h4>
                    <div class="flex flex-col gap-2">
                        {aboutlinks && aboutlinks?.map((link: LinkI) => (
                            <a target={link?.newtab ? '_blank' : '_self'} class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href={link?.link}>{link?.label}</a>
                        ))}
                    </div>
                </div>

                <div class="w-auto md:flex flex-col">
                    <h4
                        class="text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] mb-4">
                        sobre
                    </h4>
                    <div class="flex flex-col gap-2">
                        {doubtslinks && doubtslinks?.map((link: LinkI) => (
                            <a target={link?.newtab ? '_blank' : '_self'} class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href={link?.link}>{link?.label}</a>
                        ))}
                    </div>
                </div>


                <div>
                    <h4
                        class="text-[13px] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] mb-4">
                        Junte-se à nós</h4>
                    <ul class="flex items-center gap-4">
                        {sociais && sociais?.map((social: SocialI) => (
                            <li>
                                <a class="flex w-10 h-10 flex-col justify-center items-center gap-2.5 border rounded-[50%] border-solid border-[#E8EDF5]"
                                    href={social?.link} target="_blank">
                                    <img src={social?.image} alt={social?.label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div class="flex md:hidden flex-col md:hidden items-start justify-between">
                <div class="w-full order-1 collapse collapse-arrow flex-col border-[#E0DEDA] rounded-none border-t border-b border-solid">
                    <input type="checkbox" name="my-accordion-2" />
                    <h4
                        class="flex items-center text-[13px] collapse-title after:text-[#666461] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                        Contato
                    </h4>
                    <ul class="flex collapse-content flex-col gap-2">
                        <li class="flex items-center"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.52344 0.912109L4.38281 2.97461C4.5332 3.31836 4.44727 3.72656 4.14648 3.96289L3.09375 4.84375C3.80273 6.34766 5.02734 7.57227 6.53125 8.28125L7.41211 7.22852C7.64844 6.92773 8.05664 6.8418 8.40039 6.99219L10.4629 7.85156C10.8711 8.00195 11.0645 8.45312 10.957 8.86133L10.4414 10.752C10.334 11.1172 10.0117 11.375 9.625 11.375C4.29688 11.375 0 7.07812 0 1.75C0 1.36328 0.257812 1.04102 0.623047 0.933594L2.51367 0.417969C2.92188 0.310547 3.37305 0.503906 3.52344 0.912109Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.phone}</a></li>
                        <li class="flex items-center"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3906 1.92969C11.5391 3.07812 12.25 4.58203 12.25 6.22266C12.25 9.55859 9.46094 12.293 6.09766 12.293C5.08594 12.293 4.10156 12.0195 3.19922 11.5547L0 12.375L0.847656 9.23047C0.328125 8.32812 0.0273438 7.28906 0.0273438 6.19531C0.0273438 2.85938 2.76172 0.125 6.09766 0.125C7.73828 0.125 9.26953 0.78125 10.3906 1.92969ZM6.09766 11.2539C8.88672 11.2539 11.2109 8.98438 11.2109 6.22266C11.2109 4.85547 10.6367 3.59766 9.67969 2.64062C8.72266 1.68359 7.46484 1.16406 6.125 1.16406C3.33594 1.16406 1.06641 3.43359 1.06641 6.19531C1.06641 7.15234 1.33984 8.08203 1.83203 8.90234L1.96875 9.09375L1.44922 10.9531L3.36328 10.4336L3.52734 10.543C4.32031 11.0078 5.19531 11.2539 6.09766 11.2539ZM8.88672 7.48047C9.02344 7.5625 9.13281 7.58984 9.16016 7.67188C9.21484 7.72656 9.21484 8.02734 9.07812 8.38281C8.94141 8.73828 8.33984 9.06641 8.06641 9.09375C7.57422 9.17578 7.19141 9.14844 6.23438 8.71094C4.70312 8.05469 3.71875 6.52344 3.63672 6.44141C3.55469 6.33203 3.03516 5.62109 3.03516 4.85547C3.03516 4.11719 3.41797 3.76172 3.55469 3.59766C3.69141 3.43359 3.85547 3.40625 3.96484 3.40625C4.04688 3.40625 4.15625 3.40625 4.23828 3.40625C4.34766 3.40625 4.45703 3.37891 4.59375 3.67969C4.70312 3.98047 5.03125 4.71875 5.05859 4.80078C5.08594 4.88281 5.11328 4.96484 5.05859 5.07422C4.78516 5.64844 4.45703 5.62109 4.62109 5.89453C5.22266 6.90625 5.79688 7.26172 6.69922 7.69922C6.83594 7.78125 6.91797 7.75391 7.02734 7.67188C7.10938 7.5625 7.41016 7.20703 7.49219 7.07031C7.60156 6.90625 7.71094 6.93359 7.84766 6.98828C7.98438 7.04297 8.72266 7.39844 8.88672 7.48047Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.whats}</a></li>
                        <li class="flex items-center"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.03125 0.75H9.96875C10.5273 0.75 11 1.22266 11 1.78125C11 2.125 10.8281 2.42578 10.5703 2.61914L5.9082 6.12109C5.65039 6.31445 5.32812 6.31445 5.07031 6.12109L0.408203 2.61914C0.150391 2.42578 0 2.125 0 1.78125C0 1.22266 0.451172 0.75 1.03125 0.75ZM0 3.15625L4.66211 6.67969C5.15625 7.04492 5.82227 7.04492 6.31641 6.67969L11 3.15625V7.625C11 8.39844 10.377 9 9.625 9H1.375C0.601562 9 0 8.39844 0 7.625V3.15625Z" fill="#666461" />
                        </svg>
                            <a class="ml-2 block text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href="#">{contact?.email}</a></li>
                        <li class="flex items-center"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0.875C8.45508 0.875 10.2598 1.92773 11.248 3.625C12.2363 5.34375 12.2363 7.42773 11.248 9.125C10.2598 10.8438 8.45508 11.875 6.5 11.875C4.52344 11.875 2.71875 10.8438 1.73047 9.125C0.742188 7.42773 0.742188 5.34375 1.73047 3.625C2.71875 1.92773 4.52344 0.875 6.5 0.875ZM5.98438 3.45312V6.375C5.98438 6.54688 6.07031 6.71875 6.19922 6.80469L8.26172 8.17969C8.49805 8.35156 8.82031 8.28711 8.99219 8.05078C9.14258 7.81445 9.07812 7.49219 8.8418 7.32031L7.01562 6.11719V3.45312C7.01562 3.17383 6.7793 2.9375 6.5 2.9375C6.19922 2.9375 5.98438 3.17383 5.98438 3.45312Z" fill="#666461" />
                        </svg>
                            <p dangerouslySetInnerHTML={{ __html: contact?.clock }} class="ml-2 block text-sm not-italic font-normal leading-[normal] text-[#666461]"></p></li>
                    </ul>
                </div>


                <div class="w-full order-2 collapse collapse-arrow flex-col border-[#E0DEDA] rounded-none border-b border-solid">
                    <input type="checkbox" name="my-accordion-2" />
                    <h4
                        class="flex items-center text-[13px] collapse-title after:text-[#666461] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                        sobre
                    </h4>
                    <div class="flex collapse-content flex-col gap-2">
                        {aboutlinks && aboutlinks?.map((link: LinkI) => (
                            <a target={link?.newtab ? '_blank' : '_self'} class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href={link?.link}>{link?.label}</a>
                        ))}
                    </div>
                </div>

                <div class="w-full order-3 collapse collapse-arrow flex-col rounded-none">
                    <input type="checkbox" name="my-accordion-2" />
                    <h4
                        class="flex items-center text-[13px] collapse-title after:text-[#666461] not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333]">
                        dúvidas
                    </h4>
                    <div class="flex collapse-content flex-col gap-2">
                        {doubtslinks && doubtslinks?.map((link: LinkI) => (
                            <a target={link?.newtab ? '_blank' : '_self'} class="text-sm not-italic font-normal leading-[normal] hover:text-[#81A1D4] text-[#666461]" href={link?.link}>{link?.label}</a>
                        ))}
                    </div>
                </div>


                <div class="w-full order-0 py-10">
                    <h4
                        class="text-[13px] text-center not-italic font-medium leading-[normal] tracking-[1.3px] uppercase text-[#333] mb-4">
                        Junte-se à nós</h4>
                    <ul class="w-full flex justify-center items-center gap-4">
                        {sociais && sociais?.map((social: SocialI) => (
                            <li>
                                <a class="flex w-10 h-10 flex-col justify-center items-center gap-2.5 border rounded-[50%] border-solid border-[#E8EDF5]"
                                    href={social?.link} target="_blank">
                                    <img src={social?.image} alt={social?.label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Institucionais;