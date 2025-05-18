export default function TextContentEditor({name, value, onChange} : {name: string, value: string, onChange: (value: string) => void}) {
    return (
        <span className="flex flex-row justify-between items-center">
            <p>{name}</p>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-full cursor-pointer"
                style={{
                    width: "100%",
                    height: "fit-content",
                    maxHeight: "50vh",
                    overflowY: "scroll",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.5rem",
                }}
            />
        </span>
    );
}