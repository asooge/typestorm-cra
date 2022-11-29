
export const Footer: React.FC = () => {
  return (
    <footer className={'footer'}>
      <a
        href="https://github.com/asooge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by asooge
        <span>
          <img
            src="/asooge-profile.jpeg"
            alt="asooge github"
            width={24}
            height={24}
            style={{ borderRadius: '50%', marginLeft: '4px' }}
          />
        </span>
      </a>
    </footer>
  );
};
