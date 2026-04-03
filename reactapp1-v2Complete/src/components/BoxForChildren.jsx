export default function BoxForChildren({ children, className }) {
    return (
        <div className={className}>{children}</div>
    );
}