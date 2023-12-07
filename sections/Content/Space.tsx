export interface Props {
  /**
   * @title Ativar espaço em 116px
   * @description ativar espaço em 116px
   */
  active: boolean;
}

export default function Space({active}:Props) { 
  return (
   <div class={`${active ? 'max-md:mt-[116px]' : ''}`}></div>
  );
}
