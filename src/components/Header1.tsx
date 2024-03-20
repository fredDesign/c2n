import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./Header1.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <header className={styles.navbarcontainer}>
        <div className={styles.navbarContent}>
          <div className={styles.navbarBrandWrapper}>
            <img
              className={styles.navbarBrandIcon}
              loading="lazy"
              alt=""
              src="/navbar-brand@2x.png"
            />
          </div>
          <div className={styles.navbarMenu}>
            <div className={styles.navbarLink}>
              <div className={styles.accs}>Accès</div>
            </div>
            <div className={styles.navbarLink1}>
              <div className={styles.intranet}>Intranet</div>
            </div>
            <div className={styles.navbarLink2}>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.navbarLink3}>
              <div className={styles.annuaire}>Annuaire</div>
            </div>
          </div>
          <div className={styles.mores}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className={styles.mores1}>
            <img
              className={styles.image1Icon1}
              alt=""
              src="/image-1-1@2x.png"
            />
          </div>
          <div className={styles.mores2}>
            <img
              className={styles.image1Icon2}
              alt=""
              src="/image-1-2@2x.png"
            />
          </div>
        </div>
      </header>
      <div className={styles.mainNav}>
        <div className={styles.navList}>
          <FormControl
            className={styles.laboratoire}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "96px",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector.svg" style={{}} />
              )}
            >
              <MenuItem>Le laboratoire</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.recherche}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "74px",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-1.svg" style={{}} />
              )}
            >
              <MenuItem>Recherche</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.plateforme}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "80px",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-2.svg" style={{}} />
              )}
            >
              <MenuItem>Plateforme</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.partenariatValorisation}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "18.510158013544014%",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-3.svg" style={{}} />
              )}
            >
              <MenuItem>{`Partenariat & Valorisation`}</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.emploi}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "54px",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-4.svg" style={{}} />
              )}
            >
              <MenuItem>Emploi</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.scienceSociete}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "13.31828442437923%",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-5.svg" style={{}} />
              )}
            >
              <MenuItem>Science et société</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.c2nEurope}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "11.286681715575622%",
              height: "14px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "14px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "14px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "14px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3e6392",
                fontSize: 12,
                fontWeight: "Bold",
                fontFamily: "Ubuntu",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="9px" height="5px" src="/vector-6.svg" style={{}} />
              )}
            >
              <MenuItem>{`C2N & EUROPE`}</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Header;
