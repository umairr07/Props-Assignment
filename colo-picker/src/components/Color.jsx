import PropTypes from "prop-types";

export const Color = ({ code, name }) => {
  return (
    <div className="shadow-2xl p-3 rounded-lg bg-[#fff]">
      <div>
        <p
          style={{ backgroundColor: code }}
          className="w-[150px] h-[200px]"
        ></p>
        <p className="font-bold pt-2">{code}</p>
        <p style={{ color: code }} className="pt-2 font-semibold">
          {name}
        </p>
      </div>
    </div>
  );
};

Color.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
