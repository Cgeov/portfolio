import { Button } from '@/components/ui/button';

export default function MainNav() {
  return (
    <div className="hidden gap-2 md:flex flex-row justify-between w-full items-center">
      <div>Logo</div>
      <div>
        <Button variant="link">Home</Button>
        <Button variant="link">Sobre Mi</Button>
        <Button variant="link">Servicios</Button>
        <Button variant="link">Experiencia</Button>
        <Button variant="link">Proyectos</Button>
        <Button variant="link">Contacto</Button>
      </div>
    </div>
  );
}