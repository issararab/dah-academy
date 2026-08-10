interface InitialsAvatarProps {
  photoSrc?: string;
  initials: string;
  alt: string;
  size?: number;
}

export function InitialsAvatar({
  photoSrc,
  initials,
  alt,
  size = 220,
}: InitialsAvatarProps) {
  return (
    <div
      className="rounded-full border-2 border-cyan/25 bg-gradient-to-br from-blue/30 to-cyan/15 flex items-center justify-center overflow-hidden animate-float-avatar mx-auto"
      style={{ width: size, height: size }}
    >
      {photoSrc ? (
        <img
          src={photoSrc}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-heading font-black text-cyan text-5xl">
          {initials}
        </span>
      )}
    </div>
  );
}
