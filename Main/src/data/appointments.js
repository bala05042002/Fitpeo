// Exporting an array of appointment objects to be used in the application
export const appointments = [
    {
        // Appointment with a dentist
        name: 'Dr. Cameron Williamson',
        time: '09:00-11:00',
        type: 'Dentist',
        img: 'https://png.pngtree.com/png-vector/20240718/ourmid/pngtree-3d-teeth-white-background-png-image_13144254.png', // Image representing the dentist
        available: true // This appointment is available
    },
    {
        // Appointment with a physiotherapist
        name: 'Dr. Kevin Djones',
        time: '11:00-12:00',
        type: 'Physiotherapy Appointment',
        img: 'https://cdn3d.iconscout.com/3d/premium/thumb/acupuncture-3d-icon-download-in-png-blend-fbx-gltf-file-formats--therapy-body-massage-physiotherapy-pack-healthcare-medical-icons-8842221.png?f=webp', // Image representing physiotherapy
        available: false // This appointment is not currently available
    }
];