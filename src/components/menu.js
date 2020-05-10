import React from "react";
import { Popover, Menu, MenuItem, Button, InputGroup } from "@blueprintjs/core";

export const MenuButton = (props) => {
  const { onSelect } = props;
  return (
    <Popover
      position="bottom-left"
      style={{ maxHeight: "100px", overflowY: "scroll" }}
      content={
        <div style={{ display: "flex" }}>
          <Menu>
            <MenuItem
              active={true}
              text="address"
              onClick={(e) =>
                onSelect({
                  type: "address",
                })
              }
            />
            <MenuItem
              text="audio"
              onClick={(e) => onSelect({ type: "audio" })}
            />
            <MenuItem text="break">
              <MenuItem
                text="none"
                onClick={(e) => onSelect({ type: "break", break: "none" })}
              />
              <MenuItem
                text="x-weak"
                onClick={(e) => onSelect({ type: "break", break: "x-weak" })}
              />
              <MenuItem
                text="weak"
                onClick={(e) => onSelect({ type: "break", break: "weak" })}
              />
              <MenuItem
                text="medium"
                onClick={(e) => onSelect({ type: "break", break: "medium" })}
              />
              <MenuItem
                text="strong"
                onClick={(e) => onSelect({ type: "break", break: "strong" })}
              />
              <MenuItem
                text="x-strong"
                onClick={(e) => onSelect({ type: "break", break: "x-strong" })}
              />
            </MenuItem>
            <MenuItem
              text="cardinal"
              onClick={(e) => onSelect({ type: "cardinal" })}
            />
            <MenuItem
              text="characters"
              onClick={(e) => onSelect({ type: "characters" })}
            />
            <MenuItem text="date">
              <MenuItem
                text="mdy"
                onClick={(e) => onSelect({ type: "date", date: "mdy" })}
              />
              <MenuItem
                text="dmy"
                onClick={(e) => onSelect({ type: "date", date: "dmy" })}
              />
              <MenuItem
                text="ymd"
                onClick={(e) => onSelect({ type: "date", date: "ymd" })}
              />
              <MenuItem
                text="ydm"
                onClick={(e) => onSelect({ type: "date", date: "ydm" })}
              />
              <MenuItem
                text="md"
                onClick={(e) => onSelect({ type: "date", date: "md" })}
              />
              <MenuItem
                text="dm"
                onClick={(e) => onSelect({ type: "date", date: "dm" })}
              />
              <MenuItem
                text="ym"
                onClick={(e) => onSelect({ type: "date", date: "ym" })}
              />
              <MenuItem
                text="my"
                onClick={(e) => onSelect({ type: "date", date: "my" })}
              />
              <MenuItem
                text="y"
                onClick={(e) => onSelect({ type: "date", date: "y" })}
              />
              <MenuItem
                text="m"
                onClick={(e) => onSelect({ type: "date", date: "m" })}
              />
              <MenuItem
                text="d"
                onClick={(e) => onSelect({ type: "date", date: "d" })}
              />
            </MenuItem>
            <MenuItem
              text="defaults"
              onClick={(e) => onSelect({ type: "defaults" })}
            />
            <MenuItem text="disappointed">
              <MenuItem
                text="medium"
                onClick={(e) =>
                  onSelect({ type: "disappointed", disappointed: "medium" })
                }
              />
              <MenuItem
                text="low"
                onClick={(e) =>
                  onSelect({ type: "disappointed", disappointed: "low" })
                }
              />
              <MenuItem
                text="high"
                onClick={(e) =>
                  onSelect({ type: "disappointed", disappointed: "high" })
                }
              />
            </MenuItem>
            <MenuItem text="dj" onClick={(e) => onSelect({ type: "dj" })} />
            <MenuItem text="emphasis">
              <MenuItem
                text="strong"
                onClick={(e) => onSelect({ type: "emphasis", level: "strong" })}
              />
              <MenuItem
                text="moderate"
                onClick={(e) =>
                  onSelect({ type: "emphasis", level: "moderate" })
                }
              />
              <MenuItem
                text="reduced"
                onClick={(e) =>
                  onSelect({ type: "emphasis", level: "reduced" })
                }
              />
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem text="excited">
              <MenuItem
                text="medium"
                onClick={(e) =>
                  onSelect({ type: "excited", excited: "medium" })
                }
              />
              <MenuItem
                text="low"
                onClick={(e) => onSelect({ type: "excited", excited: "low" })}
              />
              <MenuItem
                text="high"
                onClick={(e) => onSelect({ type: "excited", excited: "high" })}
              />
            </MenuItem>
            <MenuItem
              text="expletive / bleep"
              onClick={(e) => onSelect({ type: "expletive" })}
            />
            <MenuItem
              text="fraction"
              onClick={(e) => onSelect({ type: "fraction" })}
            />
            <MenuItem
              text="interjection"
              onClick={(e) => onSelect({ type: "interjection" })}
            />
            <MenuItem text="ipa" onClick={(e) => onSelect({ type: "ipa" })} />
            <MenuItem
              text="lang"
              onClick={(e) => onSelect({ type: "voice", lang: "en-US" })}
            />
            <MenuItem
              text="newscaster"
              onClick={(e) => onSelect({ type: "newscaster" })}
            />
            <MenuItem
              text="number"
              onClick={(e) => onSelect({ type: "number" })}
            />
            <MenuItem
              text="ordinal"
              onClick={(e) => onSelect({ type: "ordinal" })}
            />
            <MenuItem
              text="phone"
              onClick={(e) => onSelect({ type: "phone" })}
            />
          </Menu>
          <Menu>
            <MenuItem text="pitch">
              <MenuItem
                text="x-low"
                onClick={(e) => onSelect({ type: "voice", pitch: "x-low" })}
              />
              <MenuItem
                text="low"
                onClick={(e) => onSelect({ type: "voice", pitch: "low" })}
              />
              <MenuItem
                text="medium"
                onClick={(e) => onSelect({ type: "voice", pitch: "medium" })}
              />
              <MenuItem
                text="high"
                onClick={(e) => onSelect({ type: "voice", pitch: "high" })}
              />
              <MenuItem
                text="x-high"
                onClick={(e) => onSelect({ type: "voice", pitch: "x-high" })}
              />
            </MenuItem>
            <MenuItem text="rate">
              <MenuItem
                text="x-slow"
                onClick={(e) => onSelect({ type: "voice", rate: "x-slow" })}
              />
              <MenuItem
                text="slow"
                onClick={(e) => onSelect({ type: "voice", rate: "slow" })}
              />
              <MenuItem
                text="medium"
                onClick={(e) => onSelect({ type: "voice", rate: "medium" })}
              />
              <MenuItem
                text="fast"
                onClick={(e) => onSelect({ type: "voice", rate: "fast" })}
              />
              <MenuItem
                text="x-fast"
                onClick={(e) => onSelect({ type: "voice", rate: "x-fast" })}
              />
            </MenuItem>
            <MenuItem text="sub" onClick={(e) => onSelect({ type: "sub" })} />
            <MenuItem text="time">
              <MenuItem
                text="12hr"
                onClick={(e) => onSelect({ type: "time", rate: "hms12" })}
              />
              <MenuItem
                text="24hr"
                onClick={(e) => onSelect({ type: "voice", rate: "hms24" })}
              />
            </MenuItem>
            <MenuItem text="unit" onClick={(e) => onSelect({ type: "unit" })} />
            <MenuItem text="voice">
              <MenuItem
                text="Ivy (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Ivy (en-US)" })
                }
              />
              <MenuItem
                text="Joanna (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Joanna (en-US)" })
                }
              />
              <MenuItem
                text="Joey (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Joey (en-US)" })
                }
              />
              <MenuItem
                text="Justin (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Justin (en-US)" })
                }
              />
              <MenuItem
                text="Kendra (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Kendra (en-US)" })
                }
              />
              <MenuItem
                text="Kimberly (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Kimberly (en-US)" })
                }
              />
              <MenuItem
                text="Matthew (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Matthew (en-US)" })
                }
              />
              <MenuItem
                text="Salli (en-US)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Salli (en-US)" })
                }
              />
              <MenuItem
                text="Nicole (en-AU)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Nicole (en-AU)" })
                }
              />
              <MenuItem
                text="Russell (en-AU)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Russell (en-AU)" })
                }
              />
              <MenuItem
                text="Amy (en-GB)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Amy (en-GB)" })
                }
              />
              <MenuItem
                text="Brian (en-GB)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Brian (en-GB)" })
                }
              />
              <MenuItem
                text="Emma (en-GB)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Emma (en-GB)" })
                }
              />
              <MenuItem
                text="Emma (en-GB)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Emma (en-GB)" })
                }
              />
              <MenuItem
                text="Raveena (en-IN)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Raveena (en-IN)" })
                }
              />
              <MenuItem
                text="Hans (de-DE)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Hans (de-DE)" })
                }
              />
              <MenuItem
                text="Marlene (de-DE)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Marlene (de-DE)" })
                }
              />
              <MenuItem
                text="Vicki (de-DE)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Vicki (de-DE)" })
                }
              />
              <MenuItem
                text="Conchita (es-ES)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Conchita (es-ES)" })
                }
              />
              <MenuItem
                text="Enrique (es-ES)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Enrique (es-ES)" })
                }
              />
              <MenuItem
                text="Carla (it-IT)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Carla (it-IT)" })
                }
              />
              <MenuItem
                text="Giorgio (it-IT)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Giorgio (it-IT)" })
                }
              />
              <MenuItem
                text="Mizuki (ja-JP)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Mizuki (ja-JP)" })
                }
              />
              <MenuItem
                text="Takumi (ja-JP)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Takumi (ja-JP)" })
                }
              />
              <MenuItem
                text="Celine (fr-FR)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Celine (fr-FR)" })
                }
              />
              <MenuItem
                text="Lea (fr-FR)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Lea (fr-FR)" })
                }
              />
              <MenuItem
                text="Mathieu (fr-FR)"
                onClick={(e) =>
                  onSelect({ type: "voice", voice: "Mathieu (fr-FR)" })
                }
              />
            </MenuItem>
            <MenuItem text="volume">
              <MenuItem
                text="silent"
                onClick={(e) => onSelect({ type: "voice", volume: "silent" })}
              />
              <MenuItem
                text="x-soft"
                onClick={(e) => onSelect({ type: "voice", volume: "x-soft" })}
              />
              <MenuItem
                text="soft"
                onClick={(e) => onSelect({ type: "voice", volume: "soft" })}
              />
              <MenuItem
                text="medium (default)"
                onClick={(e) => onSelect({ type: "voice", volume: "medium" })}
              />
              <MenuItem
                text="loud"
                onClick={(e) => onSelect({ type: "voice", volume: "loud" })}
              />
              <MenuItem
                text="x-loud"
                onClick={(e) => onSelect({ type: "voice", volume: "x-loud" })}
              />
            </MenuItem>
            <MenuItem
              text="whisper"
              onClick={(e) => onSelect({ type: "whisper" })}
            />
          </Menu>
        </div>
      }
    >
      <Button icon="plus" />
    </Popover>
  );
};
