import ContactDesc from './ContactDesc'

export default function ContactCard({ title, desc, extra }) {
  return (
    <div className="mt-20">
      <div className="text-subtitle-1">{title}</div>
      <ContactDesc
        desc="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget?"
        extra="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget."
      />
      <ContactDesc
        desc="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget?"
        extra="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget."
      />
      <ContactDesc
        desc="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget?"
        extra="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget."
      />
      <ContactDesc
        desc="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget?"
        extra="Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget. Lorem ipsum dolor sit amet consectetur. Scelerisque viverra eget."
      />
    </div>
  )
}
