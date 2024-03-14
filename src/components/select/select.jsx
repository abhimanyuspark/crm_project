import { useEffect, useRef, useState, useMemo } from "react";
import styles from "./select.module.css";

function Select({
  multiple = false,
  value = multiple ? [] : "",
  onChange = (c) => c,
  options = [],
  width = "300px",
  search = false,
  emptylist = false,
  fields = (i) => i.label,
  optiontemplete = (o) => o,
  valuetemplete = (v) => v,
  multiplvaluetemplete = (m) => m,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const parentRef = useRef(null);
  const inputRef = useRef(null);

  const labelInfo = (option) => (option === "" ? "--" : fields(option));

  function selectOption(option) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option === value;
  }

  const filterOptions = useMemo(() => {
    return options?.filter((o) =>
      labelInfo(o)?.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, query]);

  useEffect(() => {
    if (isOpen) {
      inputRef?.current?.focus();
    } else {
      setQuery("");
    }
  }, [isOpen, inputRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (parentRef.current && !parentRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, parentRef, setIsOpen]);

  return (
    <div
      ref={parentRef}
      style={{ width: width }}
      className={`${styles.main} ${isOpen ? styles.m : ""}`}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.container}`}
      >
        <span className={styles.value}>
          {multiple
            ? value.length > 0
              ? value.map((v, i) => (
                  <span
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      selectOption(v);
                    }}
                    className={styles["option-badge"]}
                  >
                    {multiplvaluetemplete()
                      ? multiplvaluetemplete(labelInfo(v))
                      : labelInfo(v)}
                    <span className={styles["remove-btn"]}>&times;</span>
                  </span>
                ))
              : "--"
            : valuetemplete()
            ? valuetemplete(labelInfo(value))
            : value === ""
            ? "--"
            : labelInfo(value)}
        </span>
        <div
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </div>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
      </div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {search && (
          <li className={`${styles["search-box"]}`}>
            <input
              ref={inputRef}
              type="text"
              value={query}
              placeholder="Search here..."
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
              }}
              className={`${styles.search}`}
            />
          </li>
        )}
        {multiple && (
          <li className={`${styles["buttons-box"]}`}>
            <div
              className={`${styles.button}`}
              onClick={() => {
                setIsOpen(false);
                onChange([...filterOptions]);
              }}
            >
              Select All
            </div>
            <div
              className={`${styles.button}`}
              onClick={() => {
                onChange([]);
              }}
            >
              Deselect All
            </div>
          </li>
        )}
        <ul className={styles.list}>
          {!multiple && emptylist && (
            <li
              onClick={() => {
                selectOption("");
                setIsOpen(false);
              }}
              className={`${styles.option} ${
                value === "" ? styles.selected : ""
              }`}
            >
              --
            </li>
          )}
          {filterOptions.length > 0 ? (
            filterOptions.map((option, index) => (
              <li
                onClick={() => {
                  selectOption(option);
                  !multiple && setIsOpen(false);
                }}
                key={index}
                className={`${styles.option} ${
                  isOptionSelected(option) ? styles.selected : ""
                }`}
              >
                {optiontemplete()
                  ? optiontemplete(labelInfo(option))
                  : labelInfo(option)}
              </li>
            ))
          ) : (
            <li className={`${styles.option} ${styles["no-data"]}`}>
              -- No data found --
            </li>
          )}
        </ul>
      </ul>
    </div>
  );
}

export default Select;
