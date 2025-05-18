import { Editor } from "@/types"

export interface EditorSection {
    name: string;
    editors: Editor | Editor[];
}

export default function AEditorPanel({sections, darkMode, children} : {sections: EditorSection | EditorSection[], darkMode: boolean, children: React.ReactNode}) {
    return (
        <div className={`flex flex-col w-full h-full gap-2 overflow-y-auto p-4 border-1 border-gray-500 rounded-lg ${darkMode ? "bg-[#18191b]" : "bg-white"}`}>
            {Array.isArray(sections) ? (
                sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">{section.name}</h2>
                        {Array.isArray(section.editors) ? (
                            section.editors.map((editor, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    {editor}
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col gap-2">{section.editors}</div>
                        )}
                    </div>
                ))
            ) : (
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold">{sections.name}</h2>
                    {Array.isArray(sections.editors) ? (
                        sections.editors.map((editor, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                {editor}
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col gap-2">{sections.editors}</div>
                    )}
                </div>
            )}
            {children}
        </div>
    )
}