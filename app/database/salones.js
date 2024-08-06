// async function getInfoSalon() {
  //   const res = await fetch("http://localhost:4500/api/info/salones");
  //   const resJson = await res.json();
  //   return resJson;
  // };

export const salones = [
  {
    id: 1,
    name: "Auditorio Presidentes",
    caracteristicas: {
      disponibilidad: "Lunes - Sábado",
      capacidad: {
        sociales: "120 personas.",
        empresarial: "180 personas."
      },
      servicios: [
        '<img src="/img/icons/cafe">Servicio de Autocafetería.',
        '<img src="/img/icons/parqueadero">Acceso a Parqueadero.',
        '<img src="/img/icons/audiovisual">Ayudas Audiovisuales.',
        '<img src="/img/icons/silla">200 Sillas RIMAX o 180 Sillas Interlocutoras.',
      ],
      adicionales: [
        '<img src="/img/icons/mesa">Mesas RIMAX.',
        '<img src="/img/icons/sonido_pro">Sonido profesional.',
        '<img src="/img/icons/sonido_ex">Acceso a sonido externo.',
        '<img src="/img/icons/bandera">Astas con Banderas.',
        '<img src="/img/icons/manteles">Manteles Grandes y Tapas Manteles.',
        '<img src="/img/icons/maquina">Máquina para hacer Raspados.'
      ]
    }
  },
  {
    id: 10,
    name: "Salón Nuevo",
    caracteristicas: {
      disponibilidad: "Lunes - Domingo",
      capacidad: {
        sociales: "140 personas.",
        empresarial: "200 personas."
      },
      servicios: [
        '<img src="/img/icons/cafe">Servicio de Autocafetería.',
        '<img src="/img/icons/parqueadero">Acceso a Parqueadero.',
        '<img src="/img/icons/audiovisual">Ayudas Audiovisuales.',
        '<img src="/img/icons/silla">200 Sillas RIMAX o 180 Sillas Interlocutoras.',
      ],
      adicionales: [
        '<img src="/img/icons/mesa">Mesas RIMAX.',
        '<img src="/img/icons/sonido_pro">Sonido profesional.',
        '<img src="/img/icons/sonido_ex">Acceso a sonido externo.',
        '<img src="/img/icons/bandera">Astas con Banderas.',
        '<img src="/img/icons/manteles">Manteles Grandes y Tapas Manteles.',
        '<img src="/img/icons/maquina">Máquina para hacer Raspados.'
      ]
    }
  },
  {
    id: 9,
    name: "Salón Principal",
    caracteristicas: {
      disponibilidad: "Lunes - Sábado",
      capacidad: {
        sociales: "120 personas.",
        empresarial: "180 personas."
      },
      servicios: [
        '<img src="/img/icons/cafe">Servicio de Autocafetería.',
        '<img src="/img/icons/parqueadero">Acceso a Parqueadero.',
        '<img src="/img/icons/audiovisual">Ayudas Audiovisuales.',
        '<img src="/img/icons/silla">200 Sillas RIMAX o 180 Sillas Interlocutoras.',
      ],
      adicionales: [
        '<img src="/img/icons/mesa">Mesas RIMAX.',
        '<img src="/img/icons/sonido_pro">Sonido profesional.',
        '<img src="/img/icons/sonido_ex">Acceso a sonido externo.',
        '<img src="/img/icons/bandera">Astas con Banderas.',
        '<img src="/img/icons/manteles">Manteles Grandes y Tapas Manteles.',
        '<img src="/img/icons/maquina">Máquina para hacer Raspados.'
      ]
    }
  },
];
