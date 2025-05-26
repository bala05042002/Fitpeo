// An array containing health status information for different body parts
const healthData = [
    {
        // Represents lung health status
        img: 'https://static.vecteezy.com/system/resources/previews/054/590/952/non_2x/3d-render-of-human-lungs-png.png', // Image of lungs
        name: 'Lungs', // Body part name
        date: '28 May 2025', // Date of the health check
        healthPercentage: '70%', // Health level as a percentage
        color: 'brown' // Color used for UI representation
    },
    {
        // Represents teeth health status
        img: 'https://png.pngtree.com/png-vector/20240718/ourmid/pngtree-3d-teeth-white-background-png-image_13144254.png', // Image of teeth
        name: 'Teeth',
        date: '29 May 2025',
        healthPercentage: '70%',
        color: 'blue'
    },
    {
        // Represents bone health status
        img: 'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-dog--bone-3d-object-on-png-background-cat-bone-png-image_10150118.png', // Image of bone
        name: 'Bone',
        date: '30 May 2025',
        healthPercentage: '80%',
        color: 'orange'
    }
]

export default healthData; // Exporting the array for use in other parts of the application