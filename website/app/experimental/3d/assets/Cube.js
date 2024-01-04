export default function Cube({ color, ...props }) {
    return (
        <>
            <mesh {...props}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    )
};
