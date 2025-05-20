# Mundial Escolar de Fútbol - Frontend

> [!IMPORTANT]
> Este proyecto ha sido desarrollado con fines académicos como parte del curso de Dispositivos Inteligentes de la Universidad. No está destinado para uso comercial.

Este proyecto es una interfaz web responsiva para el "Comité Organizador de Mundial Escolar de Fútbol". La aplicación está diseñada para proporcionar información y servicios relacionados con un torneo escolar de fútbol, incluyendo programación de partidos, reservación de boletos, resultados en vivo e información general.

## Visión general

El proyecto está construido como una aplicación web moderna que se adapta a varios tamaños de pantalla, desde dispositivos de escritorio hasta dispositivos portátiles como relojes inteligentes. Utilizamos una paleta de colores específica basada en verdes, turquesas, dorados y blancos para mantener una identidad visual coherente.

## Tecnologías utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor
- **React**: Biblioteca para construir interfaces de usuario
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo
- **TypeScript**: Superset tipado de JavaScript para mejor desarrollo
- **Lucide Icons**: Iconos vectoriales para la interfaz
- **pnpm**: Gestor de paquetes rápido y eficiente en espacio de disco

## Estructura del proyecto

```
/components          # Componentes reutilizables
  /ui                # Componentes de UI básicos
  /wearable          # Componentes específicos para dispositivos wearable
/app                 # Rutas y páginas de la aplicación
/hooks               # Hooks personalizados de React
/lib                 # Utilidades y funciones auxiliares
/public              # Archivos estáticos
```

## Módulos principales

### 1. Calendario de Partidos

- Vista de lista cronológica de partidos
- Vista de calendario con fechas y horarios
- Información detallada de equipos, sedes y horarios

### 2. Reservación de Boletos

- Selección de partido
- Selección de cantidad de boletos o asientos específicos
- Formulario de información de contacto
- Confirmación de reservación

### 3. Resultados en Vivo

- Marcadores en tiempo real
- Estadísticas básicas de los partidos
- Indicadores visuales del progreso del partido
- Tabla de clasificación

### 4. Información General

- Sobre el torneo
- Equipos participantes
- Reglamento
- Sedes
- Preguntas frecuentes

## Características responsivas

El diseño se adapta a diferentes tamaños de pantalla utilizando una cuadrícula de 12 columnas con los siguientes puntos de quiebre:

- 320px (móviles pequeños)
- 480px (móviles)
- 768px (tablets)
- 1024px (laptops)
- 1440px (desktops)
- 1920px (pantallas grandes)

## Características específicas para dispositivos wearable

El proyecto incluye una versión especial para dispositivos wearable (relojes inteligentes) que presenta:

1. **Panel simplificado**: Muestra solo la cuenta regresiva al próximo partido, un marcador en vivo y un botón rápido de "Reservar"
2. **Tarjetas minimalistas**: Texto mínimo, iconos/logos grandes, áreas de toque ampliadas
3. **Navegación horizontal**: Navega entre pantallas deslizando horizontalmente
4. **Tipografía optimizada**: Fuentes legibles y alto contraste para mejor visibilidad
5. **Componentes ligeros**: Iconos vectoriales y elementos UI nativos del sistema

## Detección de dispositivo wearable

La aplicación detecta automáticamente si se está ejecutando en un dispositivo wearable basado en el tamaño de la pantalla y ajusta la interfaz en consecuencia.

## Cómo ejecutar el proyecto

1. Instalar dependencias:

   ```
   pnpm install
   ```

2. Ejecutar en modo desarrollo:

   ```
   pnpm dev
   ```

3. Construir para producción:

   ```
   pnpm build
   ```

4. Iniciar versión de producción:
   ```
   pnpm start
   ```

## Notas de implementación

- Los datos actuales son simulados pero la estructura está preparada para conectarse a una API real
- Los componentes están diseñados como elementos independientes listos para ser conectados a APIs
- La interfaz de usuario utiliza un sistema de componentes modular que facilita su mantenimiento y expansión

## Próximos pasos

- Integración con backend para datos reales
- Implementación de autenticación de usuarios
- Sistema de notificaciones para actualizaciones de partidos
- Mejoras en la accesibilidad

## Licencia

> [!NOTE]
> Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE](./LICENSE) para más detalles.

El código se proporciona "tal cual", sin garantía de ningún tipo. Este proyecto es de naturaleza educativa y no está destinado para ser usado en entornos de producción sin revisiones adicionales de seguridad y rendimiento.
